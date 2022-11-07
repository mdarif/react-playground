import { render } from "@testing-library/react";
import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(0);

  //const sqrt = getSQRT(number)
  const sqrt = useMemo(() => getSQRT(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      // console.log(prevState + 1)
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn-btn-primary">
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSQRT(num) {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }

  console.log("Expensive function called!");
  return Math.sqrt(num);
}

export default UseMemoExample;
