import { useEffect, useState } from "react";

export function useFetch(url, dispatch) {
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setErrorMessage("");
        dispatch({ type: "isLoading" });
        const res = await fetch(url);
        if (!res.ok) throw new Error("couldn't fetch question");
        dispatch({ type: "isReady" });
        const data = await res.json();
        setData(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    getData();
  }, [url, dispatch]);

  return { data, errorMessage };
}
