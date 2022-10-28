import { useEffect } from "react";

export default function ProxyFetch() {
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
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  });

  return null;
}
