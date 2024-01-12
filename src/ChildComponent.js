import React from "react";
import { useState } from "react";

function ChildComponent({onDataFromChild}){
    const [inputValue,setInputValue]=useState("")

    function sendDataToParent(){
        onDataFromChild(inputValue);
    }

    return(
        <div>
            <h2>Child Component</h2>
            <input type="text" placeholder="enter some text..." onChange={(e)=>setInputValue(e.target.value)}></input>
            <button onClick={sendDataToParent}>Send data to Parent Component</button>
        </div>
    )
}

export default ChildComponent;