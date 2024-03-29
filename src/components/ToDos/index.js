import { useState } from 'react'

let globalId = 0 // to increment the id

function ToDos () {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([]) //earlier it was an array

  const addTodo = e => {
    e.preventDefault()
    setTodos(oldTodos => {
      setTask('')
      return [...oldTodos, { todo: task, id: globalId++ }] // todo is now an Array Object [{}]
    })
  }

  // Remove the selected todo item and update the state
  const deleteTodo = id => {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== id))
  }

  // const onKeyEnter = e => {
  //   if (e.keyCode === 13) {
  //     addTodo()
  //   }
  // }

  return (
    <>
      <h1>Create To Do App</h1>
      <form onSubmit={addTodo}>
        <input
          // onKeyDown={onKeyEnter} not needed in the case for usual form submission
          type='text'
          placeholder='Add Task'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button type='submit'>Add ToDo</button>
      </form>
      <div>
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              {item.todo}{' '}
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ToDos
