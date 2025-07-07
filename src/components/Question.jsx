import { useContext, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import Option from "./option/Option";
import RightArrow from "../assets/RightArrow";
import ClockAnimation from "../assets/ClockAnimation";
import Final from "../assets/Final";
import ProgressBar from "./progress-bar/ProgressBar";

function Question() {
  const { index, questions, answer, timeGiven, dispatch } =
    useContext(QuestionContext);
  const question = questions.at(index);
  const min = Math.floor(timeGiven / 60);
  const sec = Math.floor(timeGiven % 60);

  useEffect(() => {
    const tick = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => clearInterval(tick);
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <ProgressBar />
      <h3 style={{ paddingLeft: "0.5rem" }}>{question.question}</h3>
      <Option />
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
            color: timeGiven <= 50 ? "red" : "",
          }}
        >
          <ClockAnimation />
          <span>
            {min < 10 && 0}
            {min}:{sec < 10 && 0}
            {sec}
          </span>
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
