import { useContext } from "react";
import "./Option.css";
import { QuestionContext } from "../../context/QuestionContext";

function Option({ question }) {
  const { dispatch } = useContext(QuestionContext);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {question.options.map((option, i) => (
        <div
          className="opt-btn"
          key={option + i.toString()}
          onClick={() => dispatch({ type: "answerIt", payload: i })}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

export default Option;
