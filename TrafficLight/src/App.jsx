import { useState } from "react";
import "./App.css";
import TrafficLight from "./Components/TrafficLight";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TrafficLight />
    </>
  );
}

export default App;
