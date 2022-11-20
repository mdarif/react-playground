import React from "react";
import useFetch from "../../hooks/useFetch";
// import useFetch from "react-fetch-hook";

export default function FetchWithCustomHook() {
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );

  // if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Fetch API Example with custom hook</h1>
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
