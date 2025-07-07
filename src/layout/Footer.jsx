const footerStyle = {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  padding: "2.5rem",
  minHeight: "15vh",
  backgroundColor: "var(--dark-clr)",
  color: "var(--light-clr)",
};

function Footer({ children }) {
  return <footer style={footerStyle}>{children}</footer>;
}

export default Footer;
