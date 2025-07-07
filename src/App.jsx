import Header from "./layout/Header";
import Welcome from "./layout/Welcome";
import Wrapper from "./layout/Wrapper";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Welcome />
      </Wrapper>
    </>
  );
}

export default App;
