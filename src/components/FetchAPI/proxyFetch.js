import { useEffect, useState } from "react";

export default function ProxyFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function loadData() {
    try {
      setLoading(true);
      const API_KEY = process.env.REACT_APP_API_KEY;
      const API_SECRET = process.env.REACT_APP_API_SECRET;
      const response = await fetch("/v1/products/", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + window.btoa(API_KEY + ":" + API_SECRET),
        },
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  const mappedData =
    data && data.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <>
      <div>
        <button onClick={loadData}>Load Data via Proxy</button>{" "}
        <button onClick={() => setData(null)}>Clear Data</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>{!error && mappedData}</ul>
    </>
  );
}
