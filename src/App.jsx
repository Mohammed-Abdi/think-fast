import { useEffect, useReducer } from "react";
import { useFetch } from "./hooks/useFetch";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Welcome from "./layout/Welcome";
import Wrapper from "./layout/Wrapper";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, questions: action.payload };
    case "isLoading":
      return { ...state, status: "loading" };
    case "isReady":
      return { ...state, status: "ready" };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { data } = useFetch("/data/questions.json", dispatch);

  useEffect(() => {
    dispatch({ type: "getData", payload: data });
  }, [data]);

  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          {status === "loading" && <Welcome />}
          {status === "ready" && <Welcome />}
        </Wrapper>
      </Main>
      <Footer>
        <p>&copy; 2025 Think Fast. All rights reserved.</p>
      </Footer>
    </>
  );
}

export default App;
