import React from 'react';
import {useState} from "react"
import ChildComponent from './ChildComponent';

function ParentComponent(){
    const [dataFromChild,setDataFromChild]=useState("")

    function handleDataFromChild(data){
        setDataFromChild(data)
    }
    return(
        <div>
            <h2>Passing data from child component to parent component</h2>
            <h1>Parent Component</h1>
            <ChildComponent onDataFromChild={handleDataFromChild}></ChildComponent>
            <p>Data from Child: {dataFromChild}</p>
            
        </div>
    )
}
export default ParentComponent;