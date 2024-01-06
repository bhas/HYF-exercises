import { useEffect, useState } from "react";

export default function WatchCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const timeout = setTimeout(() => {
          setCount((prev) => prev + 1);
        }, 1000);
        return () => {
          clearTimeout(timeout);
        }
      });

    return <>
      <div className={"counter"}>
        You have used {count} seconds on this website
      </div>
    </>
  }