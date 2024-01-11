import React from "react";
import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";
import "./StopWatchApp.css"

function StopWatchApp() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv,setInterv] = useState()
  const [status,setStatus] = useState(0)
  //not started = 0
  //started = 1
  //stopped = 2

  const start = ()=>{
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  }

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = ()=>{
    if(updatedM===60){
        updatedH++;
        updatedM=0;
    }

    if(updatedS===60){
        updatedM++;
        updatedS=0;
    }

    if(updatedMs===60){
        updatedS++;
        updatedMs=0;
    }
    updatedMs++;
    return setTime({ms : updatedMs, s : updatedS, m : updatedM, h : updatedH})
  }

  const stop = ()=>{
    clearInterval(interv);
    setStatus(2);
  }

  const reset = ()=>{
    clearInterval(interv);
    setStatus(0)
    setTime({ms:0,s:0,m:0,h:0})
  }

  const resume =()=> start();

  return(
    <div className="clock-holder">
        <div className="main-section">
            <div className="stopwatch">
                <DisplayComponent time={time}></DisplayComponent> {/*here time is props*/}
                <BtnComponent status={status} start={start} stop={stop} reset={reset} resume={resume} ></BtnComponent>
            </div>
        </div>

  </div>
  ) 
};

export default StopWatchApp;
