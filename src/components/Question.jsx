import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import Option from "./option/Option";
import RightArrow from "../assets/RightArrow";
import ClockAnimation from "../assets/ClockAnimation";
import Final from "../assets/Final";
import ProgressBar from "./progress-bar/ProgressBar";

function Question() {
  const { index, questions, answer, dispatch } = useContext(QuestionContext);
  const question = questions.at(index);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <ProgressBar />
      <h3 style={{ paddingLeft: "1rem" }}>{question.question}</h3>
      <Option question={question} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "0.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            minHeight: "2.5rem",
          }}
        >
          <ClockAnimation />
          03:40
        </div>

        {answer !== null ? (
          index < questions.length - 1 ? (
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
              style={{ marginTop: 0, paddingLeft: "0.25rem" }}
              onClick={() => dispatch({ type: "finalize" })}
            >
              <Final />
              Finish
            </button>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Question;
