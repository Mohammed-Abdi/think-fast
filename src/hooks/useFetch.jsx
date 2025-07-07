import { useEffect, useState } from "react";

export function useFetch(url, dispatch) {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      dispatch({ type: "isLoading" });
      const res = await fetch(url);
      if (!res.ok) throw new Error("couldn't fetch question");
      dispatch({ type: "isReady" });
      const data = await res.json();
      setData(data);
    }
    getData();
  }, [url, dispatch]);

  return { data };
}
