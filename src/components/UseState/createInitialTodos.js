import { useState } from "react";

/**
 * Passing the initializer function
 *
 * This example passes the initializer function, so the createInitialTodos function only
 * runs during initialization. It does not run when component re-renders, such as when
 * you type into the input.
 *
 * Source: https://beta.reactjs.org/apis/react/useState#avoiding-recreating-the-initial-state
 */

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  /**
   * Avoiding recreating the initial state
   *
   * React saves the initial state once and ignores it on the next renders.
   * You can pass it as an 'initializer' function to useState instead:
   *
   * Notice that you’re passing 'createInitialTodos', which is the function
   * itself, and not 'createInitialTodos()', which is the result of calling
   * it. If you pass a function to useState, React will only call it during
   * initialization.
   */
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  console.log("TodoList render");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
