import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import Restart from "../assets/Restart";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

function Summary() {
  const { dispatch } = useContext(QuestionContext);
  return (
    <div style={wrapperStyle}>
      <p>This is the Summary you got X/X</p>
      <button className="cta-btn" onClick={() => dispatch({ type: "isReady" })}>
        <Restart />
        Restart Quiz
      </button>
    </div>
  );
}

export default Summary;
