import { useState } from 'react'

const initialState = {
  count: 0,
  theme: 'red',
  name: {
    fname: 'Mohammad',
    lname: 'Arif'
  }
}

function Counter () {
  const [state, setState] = useState(initialState)
  const {
    count,
    theme,
    name: { fname } // nested destructuring
  } = state

  function decrementCount () {
    setState(prevState => ({
      ...prevState,
      count: prevState.count - 1,
      theme: 'red',
      name: {
        ...prevState.name,
        fname: 'Mohammad'
      }
    }))
  }

  function incrementCount () {
    setState(prevState => ({
      ...prevState, // copy the previous state
      count: prevState.count + 1, // but update the count
      theme: 'green', // update the theme name
      name: {
        ...prevState.name, // with the same one
        fname: 'Hina' // update the fname
      }
    }))
  }

  return (
    <>
      <p>{JSON.stringify(state)}</p>
      <button onClick={decrementCount}>-</button>
      <h1>{count + ' ' + theme + ' ' + fname}</h1>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Counter
