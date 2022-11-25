/**
 * Build Tic-Tac-Toe with React Hooks
 *
 * Path: src/components/Games/TicTacToe/index.js
 */
import React, { useState } from "react";
import "./style.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");

  // Winning condition
  const checkWinner = (board) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let flag = false;
    conditions.forEach((element) => {
      if (
        board[element[0]] !== "" &&
        board[element[1]] !== "" &&
        board[element[2]] !== ""
      ) {
        if (
          board[element[0]] === board[element[1]] &&
          board[element[1]] === board[element[2]]
        ) {
          flag = true;
        }
      }
    });
    return flag;
  };

  const handleClick = (no) => {
    let squares = [...board];
    squares[no] = move;
    setBoard(squares);

    if (board[no] !== "") {
      alert("Already filled!");
      return;
    }

    if (move === "X") {
      setMove("O");
    } else {
      setMove("X");
    }

    if (checkWinner(squares)) {
      alert("Winner is " + move);
      squares.fill("");
      setBoard(squares);
    }

    if (checkDraw(squares)) {
      alert("Match Draw!");
      squares.fill("");
      setBoard(squares);
    }
  };

  const checkDraw = (board) => {
    let flag = true;
    board.forEach((element) => {
      if (element === "") {
        flag = false;
      }
    });
    return flag;
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {/** Board */}
      <div className="board">
        {board.map((value, index) => {
          return (
            <div
              className="square"
              key={index}
              onClick={() => {
                handleClick(index);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
      {/* <table>
        <tbody>
          <tr>
            <td onClick={() => handleClick(0)}>{board[0]}</td>
            <td onClick={() => handleClick(1)}>{board[1]}</td>
            <td onClick={() => handleClick(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(3)}>{board[3]}</td>
            <td onClick={() => handleClick(4)}>{board[4]}</td>
            <td onClick={() => handleClick(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(6)}>{board[6]}</td>
            <td onClick={() => handleClick(7)}>{board[7]}</td>
            <td onClick={() => handleClick(8)}>{board[8]}</td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
};

export default TicTacToe;
