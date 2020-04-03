import React from 'react';
// import api from "./services/api";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { BrowserRouter  } from "react-router-dom";
import Header from "./components/Header";
function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    )
}

export default App;
