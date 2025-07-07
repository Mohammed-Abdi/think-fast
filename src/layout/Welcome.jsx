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

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "var(--padding-sm)",
  padding: "0.5rem 1rem",
  width: "fit-content",
  backgroundColor: "var(--light-clr)",
  color: "var(--dark-clr)",
  border: "none",
  cursor: "pointer",
};

function Welcome() {
  return (
    <div style={wrapperStyle}>
      <h1>Welcome to Think Fast Quiz!</h1>
      <p>5 questions to test your general knowledge</p>
      <button style={buttonStyle}>
        <Rocket />
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;
