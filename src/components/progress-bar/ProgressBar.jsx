import { useContext } from "react";
import "./ProgressBar.css";
import { QuestionContext } from "../../context/QuestionContext";

function ProgressBar() {
  const { index, numberOfQuestions, questions, points } =
    useContext(QuestionContext);
  const totalPoint = questions.reduce((acc, cur) => acc + cur.points, 0);
  const currentQuestion = index + 1;
  const progress = (index / numberOfQuestions) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <span>
          Question {currentQuestion}/{numberOfQuestions}
        </span>
        <span>
          {points}/{totalPoint}
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
