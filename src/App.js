import React from 'react'
import NumberList from './components/numberList'
import Toggle from './components/handlingEvents'
import useLocalStorage from './CustomHooks/useLocalStorage'
import useUpdateLogger from './CustomHooks/useUpdateLogger'
import UseReducer from './components/UseReducer'
import Counter from './components/Counter'
import UpdateShoppingCartItems from './components/UpdateShoppingCartItems'
import MultipleSelection from './components/MultipleSelection'
import FilteringAList from './components/FilteringAList'
import ResetADetailForm from './components/ResetADetailForm'
import TaskAppWithState from './components/TaskAppWithState'
import TaskAppWithUseReducer from './components/TaskAppWithUseReducer'
// import RemoveShoppingCartItems from './components/RemoveShoppingCartItems'

function App () {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // return <NumberList numbers={numbers} />
  // return <Counter />
  // return <UpdateShoppingCartItems />
  // return <MultipleSelection />
  return <FilteringAList />
  // return <ResetADetailForm />
  // return <TaskAppWithState />
  // return <TaskAppWithUseReducer />
  /*   const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)
  return (
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
  ) */
}

export default App
