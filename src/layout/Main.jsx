const mainWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--dark-clr)",
  color: "var(--light-clr)",
  minHeight: "70vh",
};

function Main({ children }) {
  return <main style={mainWrapperStyle}>{children}</main>;
}

export default Main;
