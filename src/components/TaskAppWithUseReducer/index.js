import { useReducer } from 'react'
import AddTask from './AddTask.js'
import TaskList from './TaskList.js'
import tasksReducer from './tasksReducer'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
]

/**
 * Each of its event handlers calls setTasks in order to update the state.
 * As this component grows, so does the amount of state logic sprinkled
 * throughout it. To reduce this complexity and keep all your logic in
 * one easy-to-access place, you can move that state logic into a single
 * function outside your component, called a “reducer.”
 *
 * Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:
 * 1. Move from setting state to dispatching actions.
 * 2. Write a reducer function.
 * 3. Use the reducer from your component.
 */

export default function TaskApp () {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask (text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }

  function handleChangeTask (task) {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  function handleDeleteTask (taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}
