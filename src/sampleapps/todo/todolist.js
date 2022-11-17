function ToDoList({ todos, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ToDoList;
