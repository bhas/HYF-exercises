import { useEffect, useState } from "react";

export default function WatchCount() {
    const [running, setRunning] = useState(true);
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(10);

    useEffect(() => {
      if (!running) {
        return;
      }

      const delay = 1000 / (speed / 10.0);
      const timeout = setTimeout(() => {
          setCount((prev) => prev + 1);
        }, delay);
        return () => {
          clearTimeout(timeout);
        }
      });

    return <>
      <div className={"counter-container"}>
        <div>{count}</div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <div>
          Random text:
          <input type="text" onChange={x => setText(x.target.value)}/>
        </div>
        <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Play"}</button>
        <div>
          Speed: [1-1000]
          <input type="number" min={1} value={speed} max={1000} onChange={x => setSpeed(x.target.value)}/>
        </div>
      </div>
      
    
    </>
  }