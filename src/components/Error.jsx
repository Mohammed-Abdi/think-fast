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

function Error() {
  return (
    <div style={ErrorStyle}>
      <div style={wrapperStyle}>
        <NoConnection />
        <p style={{ textAlign: "center" }}>
          Oops! Unable to load data <br />
          Please check your internet connection and try again
        </p>
      </div>
    </div>
  );
}

export default Error;
