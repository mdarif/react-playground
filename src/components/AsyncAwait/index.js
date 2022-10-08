/**
 * What are good alternatives to data fetching in Effects?
 *
 * https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects
 */
import React, { useState, useEffect } from "react";
import axios from "axios";

function HackerNewsAsync() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const asyncFetchData = async (query) => {
    try {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setData(result.data.hits);

      setLoading(false);
      setSearch("");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleQuery = (e) => {
    setSearch(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    asyncFetchData(search);
  };

  const abortRequest = () => {
    console.log("abortRequest");
  };

  const clearResults = () => {
    setData([]);
  };

  // useEffect(() => {
  //   // asyncFetchData();
  // }, []);

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
