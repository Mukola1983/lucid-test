"use client"
import React, {useEffect, useState} from "react";
import AutocompleteWithInput from "./AutocompleteWithInput";
import useStore from "../../../store/useStore";
import { v4 as uuidv4 } from 'uuid';





const ValueBox = ({values,optionList }) =>{

    const {mainValue, setMainValue} = useStore();
    const [newValue, setNewValue] = useState(null)
    const [result, setResult] = useState(0)


    useEffect(()=>{
        const res = mainValue?.reduce((ac,cur) => ac+cur?.value, '')

        if(!isNaN(res)){
            setResult(eval(res))
        }else{
            setResult("wrong data")
        }


    },[mainValue])

    const handleLocState = (state, val) =>{
        if(!val){
            const list = mainValue?.reduce((ac, cur) =>{
                if(cur?.id === state.id){
                    return ac
                }else{
                    return [...ac, cur]
                }
            },[])
            setMainValue(list)
            return
        }
        if(state?.id){
            const list = mainValue?.reduce((ac, cur) =>{
                if(cur?.id === state.id){
                    return [...ac, {...val,value: val?.value || val?.name, id: state?.id}]
                }else{
                    return [...ac, cur]
                }
            },[])
            setMainValue(list)
        }else{
            setMainValue([...mainValue, {...val,value: val?.value || val?.name, id:uuidv4() }])
        }

    }



    return (
        <div>
            <div style={{display: "flex", flexWrap:"wrap", border: "1px solid grey", padding:'2px'}}>
                {values && values?.map(el =>(
                    <div key={el.id} style={{margin: "5px"}}>
                        <AutocompleteWithInput state={el} name={"name"}
                                               optionName={"name"}
                                               list={optionList}
                                               handleState={handleLocState}  />
                    </div>
                ))}
                <div style={{margin: "5px"}}>
                    <AutocompleteWithInput state={newValue} name={"name"}
                                           optionName={"name"}
                                           list={optionList}
                                           handleState={handleLocState}  />
                </div>


            </div>
            <div>

                <h4>
                    Result:  {result && <span>{result}</span> }
                </h4>

            </div>
        </div>

    )
}

export default ValueBox