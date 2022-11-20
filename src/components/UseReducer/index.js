import { useReducer } from "react";

/**
 * useReducer
 *
 * useReducer is a React Hook that lets you add a reducer to your component.
 * const [state, dispatch] = useReducer(reducer, initialArg, init?)
 */

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

/**
 * In Strict Mode, React will call your reducer and initializer
 * functions twice. This shouldn’t break your code.
 *
 * It doesn't happen in production mode.
 */

/**
 * A reducer function is where you will put your state logic.
 * It takes two arguments, the current state and the action
 * object, and it returns the next state:
 */

function reducer(state, action) {
  // return next state for React to set
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        // Without ...state above, the returned next state would only contain the count field and nothing else.
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        ...state,
        // Without ...state above, the returned next state would only contain the count field and nothing else.
        count: state.count - 1,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

function UseReducer() {
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
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function decrement() {
    /**
     * The dispatch function that lets you change it in response to interaction.
     */

    dispatch({ type: ACTIONS.DECREMENT });
  }

  function increment() {
    /**
     * The dispatch function that lets you change it in response to interaction.
     */

    dispatch({ type: ACTIONS.INCREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button> <span>{state.count}</span> {""}
      <button onClick={increment}>+</button>
    </>
  );
}

export default UseReducer;
