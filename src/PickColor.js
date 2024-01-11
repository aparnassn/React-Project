import React from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { Button } from "react-bootstrap";

function ColorPicker() {
  const [color, setColor] = useState("blue");
  const [hidden, setHidden] = useState(false);

  const pickerStyles = {
    default: {
      position: "absolute",
      bottom: "30px",
      left: "200px",
    },
  };

  return (
    <div>
      <div className="container" style={{ background: color }}>
        <div className="d-flex justify-content-center align-items-center">
          {hidden && (
            <SketchPicker
              styles={pickerStyles}
              color={color}
              onChange={(updateColor) => setColor(updateColor.hex)}
            ></SketchPicker>
          )}

          <Button onClick={() => setHidden(!hidden)}>
            {hidden ? "Close Color Picker" : "Open Color Picker"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
