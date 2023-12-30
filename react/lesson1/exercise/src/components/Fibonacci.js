import React, { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState([0, 1]);

  const increment = () => {
    const lastItems = counterState.slice(-2);
    const newArray = [...counterState, lastItems[0] + lastItems[1]]
    setCounterState(newArray);
  };

  return (
    <div>
      {counterState.map((counter) => (
        <div>{counter}</div>
      ))}
      <button onClick={increment}>Increment</button>
    </div>
  );
}