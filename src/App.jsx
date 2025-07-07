import Footer from "./layout/Footer";
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
      <Footer>
        <p>&copy; 2025. All rights reserved.</p>
      </Footer>
    </>
  );
}

export default App;
