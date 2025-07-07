import NoConnection from "../assets/NoConnection";

const ErrorStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
};

function Error({ message }) {
  return (
    <div style={ErrorStyle}>
      <div style={wrapperStyle}>
        <NoConnection />
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Error;
