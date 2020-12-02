import React, { useState } from "react";
import Example from "../example/Example";
import States from "../states/States";
import "./Dynamic.css";
function Switch(props) {
  const [name, setName] = useState("Example");
  const [button, setButton] = useState("Example");
  const clickHandler = () => {
    if (name === "Example") {
      setName("States");
      setButton("States");
    } else {
      setName("Example");
      setButton("Example");
    }
  };
  return (
    <div className={name === "Example" ? "container" : "con"}>
      <div className="btn" onClick={clickHandler}>
        {button}
      </div>
      {name === "Example" ? <Example /> : <States />}
    </div>
  );
}

export default Switch;