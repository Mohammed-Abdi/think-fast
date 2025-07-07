const wrapperStyle = {
  width: "min(30rem, 100% - 2.5rem)",
  marginInline: "auto",
};

function Wrapper({ children }) {
  return <div style={wrapperStyle}>{children}</div>;
}

export default Wrapper;
