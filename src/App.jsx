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
import Question from "./components/Question";
import Summary from "./layout/Summary";

// Initial state for the quiz
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  points: 0,
  timeGiven: 150,
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
      console.log(action.payload);
      return {
        ...state,
        status: "ready",
        index: 0,
        points: 0,
        timeGiven: 150,
      };
    case "isActive":
      return { ...state, status: "active" };
    case "errorFound":
      return { ...state, status: "error" };
    case "answerIt":
      return { ...state, answer: action.payload };
    case "tick":
      return {
        ...state,
        timeGiven: state.timeGiven--,
        status: state.timeGiven === 0 ? "finish" : state.status,
      };
    case "increasePoints":
      return {
        ...state,
        points:
          state.answer === state.questions.at(state.index).correctAnswerIndex
            ? state.points + state.questions.at(state.index).points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        answer: null,
        index:
          state.index < state.questions.length - 1
            ? state.index++
            : state.index,
      };
    case "finalize":
      return { ...state, answer: null, status: "finish" };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ questions, points, status, index, answer, timeGiven }, dispatch] =
    useReducer(reducer, initialState);
  const numberOfQuestions = questions?.length;
  const { data } = useFetch("/data/questions.json", dispatch);

  useEffect(() => {
    if (data?.questions?.length)
      dispatch({ type: "getData", payload: data.questions });
  }, [data]);

  useEffect(() => {
    if (answer !== null) dispatch({ type: "increasePoints" });
  }, [answer]);

  return (
    <>
      <Header />
      <Main>
        <QuestionContext.Provider
          value={{
            questions,
            points,
            numberOfQuestions,
            status,
            index,
            answer,
            timeGiven,
            dispatch,
          }}
        >
          <Wrapper>
            {status === "loading" && <Loader />}
            {status === "ready" && <Welcome />}
            {status === "error" && <Error />}
            {status === "active" && <Question />}
            {status === "finish" && <Summary />}
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
