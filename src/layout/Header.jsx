const headerStyle = {
  fontWeight: 600,
  textAlign: "center",
  padding: "1.25rem",
  backgroundColor: "var(--dark-clr)",
  color: "var(--light-clr)",
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Think Fast</h1>
    </header>
  );
}

export default Header;
