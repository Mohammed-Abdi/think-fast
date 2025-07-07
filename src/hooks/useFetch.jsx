import { useEffect, useState } from "react";

export function useFetch(url, dispatch) {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        dispatch({ type: "isLoading" });

        const res = await fetch(url);
        if (!res.ok) throw new Error("couldn't fetch questions");

        const data = await res.json();
        dispatch({ type: "isReady" });
        setData(data);
      } catch (error) {
        console.error(error.message);
        dispatch({ type: "errorFound" });
      }
    }
    getData();
  }, [url, dispatch]);

  return { data };
}
