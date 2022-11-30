import React, { useState, useEffect } from "react";
import UsersList from "./UsersList.js";

export default function FetchUserNextPrev() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState(1);

  function GithubUser({ name, email, phone }) {
    return (
      <div>
        <h1>{name}</h1>
        <div>{email}</div>
        <p>{phone}</p>
      </div>
    );
  }

  async function fetchUserProfile() {
    try {
      setLoading(true);
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      /**
       * An accurate check for a successful fetch() would include checking that the promise resolved,
       * then checking that the resp.ok property has a value of true.
       */
      if (!resp.ok) {
        throw new Error(`This is an HTTP error: The status is ${resp.status}`);
      }
      const data = await resp.json();
      setData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, [userId]);

  if (loading) return <p>loading....</p>;
  if (error) return <p>Error....</p>;
  if (!data) return null;

  return (
    <div>
      <GithubUser {...data} />
      <UsersList />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <button
        disabled={userId === 1}
        onClick={() => setUserId((prevId) => prevId - 1)}
      >
        Previous
      </button>{" "}
      <button
        disabled={userId === 10}
        onClick={() => setUserId((prevId) => prevId + 1)}
      >
        Next
      </button>
    </div>
  );
}
