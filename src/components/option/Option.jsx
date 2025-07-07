import { useContext } from "react";
import "./Option.css";
import { QuestionContext } from "../../context/QuestionContext";

function Option() {
  const { index, answer, questions, dispatch } = useContext(QuestionContext);
  const question = questions.at(index);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {question.options.map((option, i) => {
        const isCorrect = i === questions.at(index).correctAnswerIndex;
        const isWrongSelected = answer === i && !isCorrect;

        const optionStyle = {
          background:
            answer !== null
              ? isCorrect
                ? "linear-gradient(90deg,#007904 60%,#31b438)"
                : isWrongSelected
                ? "linear-gradient(90deg,#790000 60%,#b43131)"
                : ""
              : "",
        };

        return (
          <div
            className="opt-btn"
            style={{
              ...optionStyle,
              pointerEvents: answer !== null ? "none" : "auto",
              cursor: answer !== null ? "not-allowed" : "pointer",
            }}
            key={option + i.toString()}
            onClick={() => dispatch({ type: "answerIt", payload: i })}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}

export default Option;
