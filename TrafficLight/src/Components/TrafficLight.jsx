import React, { useState } from "react";

function TrafficLight() {
  const [activeLight, setActiveLight] = useState("red");

  const handleNextClick = () => {
    setActiveLight((prevLight) => {
      if (prevLight === "red") {
        return "green";
      } else if (prevLight === "green") {
        return "yellow";
      } else if (prevLight === "yellow") {
        return "red";
      }
    });
  };
  return (
    <div className="app">
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
      <div className={`traffic-light ${activeLight}`}>
        <div className="light red"></div>
        <div className="light yellow"></div>
        <div className="light green"></div>
      </div>
    </div>
  );
}

export default TrafficLight;
