import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { GlobalStyles } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { Servicos } from "./pages/Serviços/index.jsx";
import { Header } from "./components/Header/index.jsx"
import { Footer } from "./components/Footer/index.jsx"





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Servicos />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
