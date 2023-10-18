import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { HeaderStyle } from "./styles/Header.style";
import { MainStyle } from "./styles/Main.style";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderStyle />
      <MainStyle />
    </>
  );
}

export default App;
