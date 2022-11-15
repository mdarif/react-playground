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
    /**
     * In development, you will see two 'fetches' in the Network tab.
     * There is nothing wrong with that. With the approach above,
     * the first Effect will immediately get cleaned up so its
     * copy of the ignore variable will be set to true. So even
     * though there is an extra request, it won’t affect the
     * state thanks to the if (!ignore) check.
     */
    let ignore = false;

    async function getData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        // parses JSON response into native JavaScript objects
        let actualData = await response.json();
        // Call the setData once ignore is true only
        if (!ignore) {
          setData(actualData);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    /**
     * In production, there will only be one request. If the second request in
     * development is bothering you, the best approach is to use a solution
     * that deduplicates requests and caches their responses between components.
     */
    getData();

    /**
     * If your Effect fetches something, the cleanup function should either
     * 'abort the fetch' or 'ignore' its result:
     */

    return () => {
      ignore = true;
    };
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
