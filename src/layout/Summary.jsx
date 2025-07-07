const wrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

function Summary() {
  return (
    <div style={wrapperStyle}>
      <p>This is the Summary you got X/X</p>
    </div>
  );
}

export default Summary;
