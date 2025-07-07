import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import Rocket from "../assets/Rocket";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  textAlign: "center",
  padding: "1rem",
  margin: "auto",
};

function Welcome() {
  const { numberOfQuestions, dispatch } = useContext(QuestionContext);
  return (
    <div style={wrapperStyle}>
      <h1>Welcome to Think Fast Quiz!</h1>
      <p>{numberOfQuestions} questions to test your general knowledge</p>
      <button
        className="cta-btn"
        onClick={() => dispatch({ type: "isActive" })}
      >
        <Rocket />
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;
