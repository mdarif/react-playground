import "./style.css";
import { useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setStartTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setStartTime(0);
  };

  /**
   * Math.floor()
   *
   * The Math.floor() function returns the largest integer less than or equal to a given number.
   */
  let mins = Math.floor(startTime / 60);

  /**
   * Remainder (%)
   *
   * The remainder operator returns the remainder left over when one operand is divided by a second operand.
   */
  // 👇️ get remainder of seconds
  let secs = startTime % 60;

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {mins} mins </span>
      <span> {secs} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
