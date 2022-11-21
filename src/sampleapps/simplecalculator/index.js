import { useReducer } from "react";

/**
 * initialState:
 *
 * The value from which the initial state is calculated.
 * It can be a value of any type. How the initial state is calculated
 * from it depends on the next init argument.
 */

const initialState = {
  num1: 0,
  num2: 0,
  result: "No result",
};

/**
 * A reducer function is where you will put your state logic.
 * It takes two arguments, the current state and the action
 * object, and it returns the next state:
 */
function reducer(state, action) {
  if (action.type === "ADD") {
    return {
      ...state,
      result: state.num1 + state.num2,
    };
  }
  if (action.type === "SUBTRACT") {
    return {
      ...state,
      result: state.num1 - state.num2,
    };
  }
  if (action.type === "SET_NUM_1") {
    return {
      ...state,
      num1: action.number,
    };
  }
  if (action.type === "SET_NUM_2") {
    return {
      ...state,
      num2: action.number,
    };
  }
  if (action.type === "clear") {
    return initialState;
  }
}

export default function SimpleCalculator() {
  /**
   * useReducer(reducer, initialArg, init?)
   *
   * The useReducer Hook is similar to useState
   * you must pass it an initial state and it
   * returns a stateful value and a way to
   * set state (in this case, the dispatch function).
   * But it’s a little different.
   */

  // Call useReducer at the top level of your component to manage state with a reducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            onClick={() => {
              /**
               * The dispatch function that lets you change it in response to interaction.
               */
              dispatch({ type: "SET_NUM_1", number });
            }}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            onClick={() => {
              /**
               * The dispatch function that lets you change it in response to interaction.
               */
              dispatch({ type: "SET_NUM_2", number });
            }}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>c</button>
      </div>
      <div>
        <h2>Result: {state && state.result}</h2>
      </div>
    </div>
  );
}
