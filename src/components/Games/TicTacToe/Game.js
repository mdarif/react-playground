import React from "react";
import Board from "./Board";

const Game = () => {
  const handleClick = (val) => {
    console.log(val);
  };

  return (
    <div>
      <Board onClick={handleClick} />
    </div>
  );
};

export default Game;
