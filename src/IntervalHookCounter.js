import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect( () => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    //   console.log({interval})
    };
  },[count]);
  return <div>count:{count}</div>;
}

export default IntervalHookCounter;
