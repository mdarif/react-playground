import React from 'react'
import NumberList from './components/numberList'
import Toggle from './components/handlingEvents'
import useLocalStorage from './CustomHooks/useLocalStorage'
import useUpdateLogger from './CustomHooks/useUpdateLogger'
import UseReducer from './components/UseReducer'

function App () {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // return <NumberList numbers={numbers} />
  return <UseReducer />
  /*   const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)
  return (
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
  ) */
}

export default App
