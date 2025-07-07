import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import Option from "./option/Option";
import RightArrow from "../assets/RightArrow";
import ClockAnimation from "../assets/ClockAnimation";
import Final from "../assets/Final";

function Question() {
  const { index, questions, dispatch } = useContext(QuestionContext);
  const question = questions.at(index);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <h3 style={{ paddingLeft: "1rem" }}>{question.question}</h3>
      <Option question={question} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "0.25rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <ClockAnimation />
          03:40
        </div>

        {index < questions.length - 1 ? (
          <button
            className="cta-btn"
            style={{ marginTop: 0, paddingRight: "0.25rem" }}
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next <RightArrow />
          </button>
        ) : (
          <button
            className="cta-btn"
            style={{ marginTop: 0, paddingRight: "0.25rem" }}
            onClick={() => dispatch({ type: "finalize" })}
          >
            Finish <Final />
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
