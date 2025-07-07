const headerStyle = {
  fontSize: "2.5rem",
  minHeight: "15vh",
  fontWeight: 600,
  textAlign: "center",
  padding: "1.25rem",
  backgroundColor: "var(--dark-clr)",
  color: "var(--light-clr)",
};

function Header() {
  return <header style={headerStyle}>Think Fast</header>;
}

export default Header;
