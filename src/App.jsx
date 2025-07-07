import { useReducer } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Welcome from "./layout/Welcome";
import Wrapper from "./layout/Wrapper";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
};

function reducer() {
  return;
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <Welcome />
        </Wrapper>
      </Main>
      <Footer>
        <p>&copy; 2025 Think Fast. All rights reserved.</p>
      </Footer>
    </>
  );
}

export default App;
