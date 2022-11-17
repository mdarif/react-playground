function ToDo({ addTodo, task, setTask }) {
  return (
    <>
      <form onSubmit={addTodo}>
        <input
          placeholder="Add Task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />{" "}
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default ToDo;
