import React, { useState, useEffect } from "react";

export default function MaxCount() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);
  const [hide, setHide] = useState(false);
  const add = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(timerID);
      setHide(true);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [timer]);

  return (
    <div className="App">
      <h1>Total {counter} Clicks</h1>
      <h2>Time left: {timer} seconds</h2>
      {!hide && <button onClick={add}>+</button>}
    </div>
  );
}
