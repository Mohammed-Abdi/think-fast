import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import "./Score.css";

function Score() {
  const [progressAnimation, setProgressAnimation] = useState(0);
  const { points, questions } = useContext(QuestionContext);

  const totalPoints = questions.reduce((acc, q) => acc + q.points, 0);
  const scorePercentage = (points / totalPoints) * 100;

  useEffect(() => {
    const timeOut = setTimeout(setProgressAnimation(scorePercentage), 1000);
    return () => clearTimeout(timeOut);
  }, [scorePercentage]);

  function getMessage() {
    if (points === 0) return "Better luck next time";
    if (scorePercentage > 0 && scorePercentage < 40)
      return "Keep going, don't stop";
    if (scorePercentage >= 40 && scorePercentage < 70)
      return "You're doing pretty well";
    if (scorePercentage >= 70 && scorePercentage < 100)
      return "So close to perfect";
    if (scorePercentage === 100) return "You nailed every question";
  }

  function getEmoji() {
    if (points === 0) return "😵‍💫";
    if (scorePercentage > 0 && scorePercentage < 40) return "😤";
    if (scorePercentage >= 40 && scorePercentage < 70) return "🤔";
    if (scorePercentage >= 70 && scorePercentage < 100) return "😃";
    if (scorePercentage === 100) return "🎉";
  }

  const message = getMessage();

  const emoji = getEmoji();

  const radius = 65;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (progressAnimation / 100) * circumference;

  return (
    <div className="score-wrapper">
      <div className="circular-container">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="scorePercentage-ring"
        >
          <circle
            stroke="#ccc"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="var(--accent-clr)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="score-percentage-ring-circle"
          />
        </svg>
        <span className="center-label">
          <span>{emoji}</span>
          <span>
            {points}/{totalPoints}
          </span>
        </span>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Score;
