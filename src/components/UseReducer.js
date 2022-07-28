import { useState, useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

/**
 * A reducer function is where you will put your state logic.
 * It takes two arguments, the current state and the action
 * object, and it returns the next state:
 */

function reducer (state, action) {
  // return next state for React to set
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      throw Error('Unknown action: ' + action.type)
  }
}

function UseReducer () {
  /**
   * The useReducer Hook is similar to useState
   * you must pass it an initial state and it
   * returns a stateful value and a way to
   * set state (in this case, the dispatch function).
   * But it’s a little different.
   */
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function decrement () {
    // setCount(prevState => prevState - 1)

    /**
     * The object you pass to dispatch is called an “action:”
     */
    // "action" object
    dispatch({ type: ACTIONS.DECREMENT }) // Call reducer
  }

  function increment () {
    //setCount(prevState => prevState + 1)

    /**
     * The object you pass to dispatch is called an “action:”
     */
    // "action" object
    dispatch({ type: ACTIONS.INCREMENT }) // Call reducer
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default UseReducer
