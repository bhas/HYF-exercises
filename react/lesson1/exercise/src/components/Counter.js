import React, { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState(0);

  const increment = () => {
    setCounterState((prev) => prev + 1);
  };

  return <button onClick={increment}>{counterState}</button>;
}