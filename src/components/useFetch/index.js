import React from "react";
import useFetch from "react-fetch-hook";

export default function UseFetchData() {
  const { isLoading, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  console.log({ isLoading, data });
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {!isLoading &&
        data.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
    </>
  );
}
