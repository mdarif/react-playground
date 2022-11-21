import { useState, useEffect } from "react";

/**
 * Considerations before fetching data [IMP]
 *
 * When we request data, we must prepare a state to store the data
 * upon return. We can store it in a state management tool like
 * Redux or store it in a context object. But, to keep things simple,
 * we will store the returned data in the React local state.
 */

export default function FetchApi() {
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
    /**
     * Fetch API
     *
     * The Fetch API provides a JavaScript interface for accessing and
     * manipulating parts of the protocol, such as requests and responses.
     * It also provides a global fetch() method that provides an easy,
     * logical way to fetch resources asynchronously across the network.
     *
     * MDN: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then((response) => {
        /**
         * An accurate check for a successful fetch() would include checking that the promise resolved,
         * then checking that the Response.ok property has a value of true.
         */
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
      })
      /**
       * Promise.prototype.finally()
       *
       * The finally() method of a Promise schedules a function, the callback function,
       * to be called when the promise is settled. Like then() and catch(),
       * it immediately returns an equivalent Promise object, allowing you to chain
       * calls to another promise method, an operation called composition.
       *
       * This lets you avoid duplicating code in both the promise's then() and catch() handlers.
       */
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fetch API Example with Promises</h1>
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
