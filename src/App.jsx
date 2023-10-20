import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"
import { HeaderStyle } from "./styles/Header.style";
import { MainStyle } from "./styles/Main.style";
import { FooterStyle } from "./styles/Footer.style"
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderStyle />
      <MainStyle />
      <FooterStyle />
    </>
  );
}

export default App;
