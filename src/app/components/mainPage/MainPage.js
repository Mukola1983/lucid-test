// "use client"

import React, from "react";
import useStore from "../../../store/useStore";
import { useQuery } from "@tanstack/react-query";
import ValueBox from "./ValueBox";

const fetchData = async () => {
    const res = await fetch("https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete");

    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json()
    return  data?.reduce((ac,cur) => ac?.some(el => el.id === cur.id) ? ac : [...ac, cur],[])
};

const MainPage = () =>{

    const {mainValue, } = useStore();
    const { data, error, isLoading } = useQuery({
        queryKey: ["formulas"],
        queryFn: fetchData,
    });


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;



     // {
     //        "name": "name 43",
     //        "category": "category 43",
     //        "value": 16,
     //        "id": "43",
     //        "inputs": "hello "
     //    },

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            Test

            {data &&
            <ValueBox values={mainValue} optionList={data}/>
            }

        </div>
    );
}

export default MainPage