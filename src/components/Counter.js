import { useState } from 'react'

const initialState = {
  count: 0,
  theme: 'red'
}

function Counter () {
  const [state, setState] = useState(initialState)
  const { count, theme } = state

  function decrementCount () {
    setState(prevState => ({
      ...prevState,
      count: prevState.count - 1,
      theme: 'red'
    }))
  }

  function incrementCount () {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1,
      theme: 'green'
    }))
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <h1>{count + ' ' + theme}</h1>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Counter
