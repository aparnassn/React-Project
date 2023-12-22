import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect- Updating document title")
    document.title = `You have clicked ${count} times`;
  },[count]);   //[count]-->when clicks the click button then console should update(not while the text is given)

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      <Button onClick={() => setCount(count + 1)}>Click {count} times</Button>
    </div>
  );
}

export default HookCounterOne;
