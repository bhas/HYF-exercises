import React, { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState([0, 1]);

  const increment = () => {
    // setCounterState((prev) => prev + 1);
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