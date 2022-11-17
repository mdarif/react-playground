import { useState } from "react";
import ToDo from "./todo";
import ToDoList from "./todolist";

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: task,
    };
    setTodos([newItem, ...todos]);
    setTask("");
  };

  const deleteTodo = (id) => {
    const deletedItem = todos.filter((todo) => todo.id !== id);
    setTodos(deletedItem);
  };

  return (
    <>
      <h1>To Do App</h1>
      <ToDo addTodo={addTodo} task={task} setTask={setTask} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default ToDoApp;
