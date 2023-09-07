import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button click");
  }
  const handleClick2 = () => {
    alert("button 2 click");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button
        onClick={() => {
          alert("button 3 click");
        }}
      >
        Click me 3
      </button>
      {/* <button onClick={addToFive(5)}>Click me 4</button> */}
      <button onClick={() => addToFive(5)}>Click me 4</button>
    </>
  );
}

export default App;
