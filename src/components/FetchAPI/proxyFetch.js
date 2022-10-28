import { useEffect, useState } from "react";

export default function ProxyFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const response = await fetch("/v1/products/", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " +
            window.btoa(
              "6d0480d5-2132-56bb-9f04-fec613de2ac4" +
                ":" +
                "fa838754-c2e0-5118-85ba-be8b835b0774"
            ),
        },
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const mappedData = data.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <>
      <ul>{!loading && mappedData}</ul>
    </>
  );
}
