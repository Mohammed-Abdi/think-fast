import LoaderAnimation from "../assets/LoaderAnimation";

const loaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

function Loader() {
  return (
    <div style={loaderStyle}>
      <LoaderAnimation />
    </div>
  );
}

export default Loader;
