import { useState } from "react";
import logo from "./logo.svg";

function App() {
  const myStyle ={
    colSpacing:20,
    padding:20
    
  };
  
  const [inputval,setInputVal]=useState("")
  
  function handleInput(data){
    if(data==="="){
      setInputVal((oldvalue)=>eval(oldvalue))
    }else{
      setInputVal((oldvalue)=>oldvalue+data)
    }
  }
  return (
      <div className='container'>
              <div className="calculator" >
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card" style={{backgroundColor:"seagreen"}}>
              <div style={{padding:15}}><center>
                <input type="text" value={inputval} onChange={(event)=>setInputVal(event.target.value)} style={{height:20, padding:12,marginTop:20,textAlign:'right'}}></input>
                </center>
              </div>
              
              <div className="row" > 
              <div className="col" style={myStyle}>              
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>setInputVal("")} style={{backgroundColor:'brown'}}>AC</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>setInputVal("")} style={{backgroundColor:'brown'}}>Del</button>
              <button type="button" className="btn btn-primary col-sm-3"   onClick={()=>handleInput(".")} style={{backgroundColor:'coral'}}>.</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("/")} style={{backgroundColor:'coral'}} >/</button>
              </div>  
            </div>
            
          
            <div className="row"  >
                <div className="col" style={myStyle}>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("7")} style={{backgroundColor:'darkblue'}}>7</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("8")} style={{backgroundColor:'darkblue'}}>8</button>
               <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("9")} style={{backgroundColor:'darkblue'}}>9</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("*")} style={{backgroundColor:'coral'}}>*</button> 
            </div>
            </div>
             <div className="row" >
                <div className="col" style={myStyle}>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("4")} style={{backgroundColor:'darkblue'}}>4</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("5")} style={{backgroundColor:'darkblue'}}>5</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("6")} style={{backgroundColor:'darkblue'}}>6</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("-")} style={{backgroundColor:'coral'}}>-</button>
            </div>
            </div>
            <div className="row"  >
                <div className="col" style={myStyle}>
              <button type="button" className="btn btn-primary col-sm-3" onClick={()=>handleInput("1")} style={{backgroundColor:'darkblue'}}>1</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("2")} style={{backgroundColor:'darkblue'}}>2</button>
              <button type="button" className="btn btn-primary col-sm-3" onClick={()=>handleInput("3")} style={{backgroundColor:'darkblue'}}>3</button>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("+")} style={{backgroundColor:'coral'}}>+</button>
            </div>
            
            </div>
            <div className="row" >
                <div className="col" style={myStyle}>
              <button type="button" className="btn btn-primary col-sm-3"  onClick={()=>handleInput("00")} style={{backgroundColor:'darkblue'}}>00</button>
              <button type="button" className="btn btn-primary col-sm-3" onClick={()=>handleInput("0")} style={{backgroundColor:'darkblue'}}>0</button>
              <button type="button" className="btn btn-primary col-sm-3" onClick={()=>handleInput("=")} style={{backgroundColor:'green', width:75}} >=</button>
              
            </div>
           </div> 
           
            </div>
          </div>

        </div>
      </div>
      </div>

    
    )}


export default App;