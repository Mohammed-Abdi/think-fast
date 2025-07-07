import { useEffect, useReducer } from "react";
import { useFetch } from "./hooks/useFetch";
import { QuestionContext } from "./context/QuestionContext";

// Layout and UI components
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Welcome from "./layout/Welcome";
import Wrapper from "./layout/Wrapper";
import Loader from "./components/Loader";
import Error from "./components/Error";

// Initial state for the quiz
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
};

// Reducer function to manage quiz state transitions
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
  const numberOfQuestions = questions?.length;
  const { data } = useFetch("/data/questions.json", dispatch);

  useEffect(() => {
    if (data?.questions?.length)
      dispatch({ type: "getData", payload: data.questions });
  }, [data]);

  return (
    <>
      <Header />
      <Main>
        <QuestionContext.Provider
          value={{
            questions,
            numberOfQuestions,
            status,
            index,
            answer,
            dispatch,
          }}
        >
          <Wrapper>
            {status === "loading" && <Loader />}
            {status === "ready" && <Welcome />}
            {status === "error" && <Error />}
          </Wrapper>
        </QuestionContext.Provider>
      </Main>
      <Footer>
        <p>&copy; 2025 Think Fast. All rights reserved.</p>
      </Footer>
    </>
  );
}

export default App;
