import React, { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState(0);

  const increment = () => {
    setCounterState((prev) => prev + 1);
  };

  const reset = () => {
    setCounterState(0);
  };

  const double = () => {
    setCounterState((prev) => prev * 2);
  };

  return <>
    <div>
      <button className={"counter-btn"} onClick={increment}>{counterState}</button>
      <button className={"counter-btn"} onClick={reset}>Reset</button>
      <button className={"counter-btn"} onClick={double}>Double</button>
    </div>
  </>
}