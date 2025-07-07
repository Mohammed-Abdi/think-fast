import Header from "./layout/Header";
import Main from "./layout/Main";
import Welcome from "./layout/Welcome";
import Wrapper from "./layout/Wrapper";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <Welcome />
        </Wrapper>
      </Main>
    </>
  );
}

export default App;
