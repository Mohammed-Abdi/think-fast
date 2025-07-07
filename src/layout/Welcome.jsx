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
  return (
    <div style={wrapperStyle}>
      <h1>Welcome to Think Fast Quiz!</h1>
      <p>5 questions to test your general knowledge</p>
      <button className="cta-btn">
        <Rocket />
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;
