/**
 * Promise
 *
 * The Promise object represents the eventual completion (or failure) of
 * an asynchronous operation and its resulting value.
 *
 * A Promise is in one of these states:
 *
 * 'pending': initial state, neither fulfilled nor rejected.
 * 'fulfilled': meaning that the operation was completed successfully.
 * 'rejected': meaning that the operation failed.
 */
import React, { useState } from "react";
import axios from "axios";

function HackerNewsPromise() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const promiseFetchData = (query) => {
    const result = axios(`https://hn.algolia.com/api/v1/search?query=${query}`);
    result
      .then((response) => {
        setData(response.data.hits);
        setLoading(false);
        setSearch("");
        setError(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setError(error);
        setSearch("");
        setData([]);
      });
  };

  const handleQuery = (e) => {
    setSearch(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setData([]);
    setLoading(true);
    promiseFetchData(search);
  };

  const clearResults = () => {
    setData([]);
    setError(false);
  };

  return (
    <>
      <h2 style={{ color: "red" }}>{error && error.message}</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Type the query and press enter"
          value={search}
          onChange={handleQuery}
        />
        <input type="button" value="Clear Results!!!" onClick={clearResults} />
      </form>

      <h1>{loading && "Loading..."}</h1>
      {/**
       * The logical AND (&&) operator (logical conjunction) for a set of boolean operands will be true
       * if and only if all the operands are true. Otherwise it will be false.
       */}
      <h2>{data.length === 0 && "No result found"}</h2>
      <ul>
        {data &&
          data
            .filter((item) => {
              return item.title !== "" && item.title !== null;
            })
            .map((item) => {
              return (
                <li key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default HackerNewsPromise;
