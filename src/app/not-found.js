

"use client"
import React from "react" ;
import {useRouter} from "next/navigation";


const Custom404 = () =>{

    const router = useRouter()


    const toPath = () =>{

            router.push('/')

    }


    return(
        <div>
           not found
        </div>

    )
}


export default Custom404;