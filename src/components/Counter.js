import { useState } from 'react'

function Counter () {
  const [state, setState] = useState({ count: 0, theme: 'blue' })
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
      <span>{count} </span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Counter
