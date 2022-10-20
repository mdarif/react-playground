import { useState, useEffect } from "react";

/**
 * Considerations before fetching data
 *
 * When we request data, we must prepare a state to store the data
 * upon return. We can store it in a state management tool like
 * Redux or store it in a context object. But, to keep things simple,
 * we will store the returned data in the React local state.
 */

/**
 * The previous method explained data fetching using the pure promise
 * syntax. Here we will learn a more elegant method to get data using
 * the async/await.
 */

export default function FetchApiWithAwait() {
  /**
   * Next, if the data doesn’t load, we must provide a state to manage
   * the loading stage to improve the user experience and another state
   * to manage the error should anything go wrong. This gives us three
   * state variables like so:
   */
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * In React, we should avoid performing side effects directly within
   * the component body to avoid inconsistencies. Instead, we can
   * isolate them from the rendering logic using the useEffect Hook.
   */
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Fetch API Example</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul>
        {data &&
          data.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
      </ul>
    </div>
  );
}
