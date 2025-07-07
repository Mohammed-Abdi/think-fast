import "./Option.css";

function Option({ question }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {question.options.map((option, i) => (
        <div className="opt-btn" key={option + i.toString()}>
          {option}
        </div>
      ))}
    </div>
  );
}

export default Option;
