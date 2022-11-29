/**
 * What are good alternatives to data fetching in Effects?
 *
 * https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects
 */
import React, { useState } from "react";
import axios from "axios";

function HackerNewsAsync() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  /**
   * async function
   *
   * An async function is a function declared with the async keyword,
   * and the await keyword is permitted within it. The async and await
   * keywords enable asynchronous, promise-based behavior to be written
   * in a cleaner style, avoiding the need to explicitly configure
   * promise chains.
   *
   * Description from MDN:
   * Async functions can contain zero or more 'await' expressions.
   * Await expressions make promise-returning functions behave as
   * though they're synchronous by suspending 'execution' until the
   * returned promise is 'fulfilled' or 'rejected'.
   */

  const asyncFetchData = async (query) => {
    try {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );

      const data = await result.data.hits;
      setData(data);
      setError(false);

      setSearch("");
    } catch (error) {
      setError(error.message);
      setData(null);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleQuery = (e) => {
    setSearch(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setData([]);
    setLoading(true);
    asyncFetchData(search);
  };

  const abortRequest = () => {
    console.log("abortRequest");
  };

  const clearResults = () => {
    setData([]);
  };

  return (
    <>
      <h2 style={{ color: "red" }}>{error}</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Type the query and press enter"
          value={search}
          onChange={handleQuery}
        />
      </form>
      <input type="button" value="Abort Request" onClick={abortRequest} />
      <input type="button" value="Clear Results" onClick={clearResults} />
      <h1>{loading && "Loading..."}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HackerNewsAsync;
