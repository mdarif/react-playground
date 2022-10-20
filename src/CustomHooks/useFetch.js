import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch(url); // wait until the promise resolves
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let data = await response.json(); // wait until the promise resolves

        setData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    dataFetching();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
