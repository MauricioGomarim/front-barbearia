import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { GlobalStyles } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { Servicos } from "./pages/Usuario/Serviços/index.jsx";
import { Datas } from "./pages/Usuario/Datas/index.jsx";
import { Home } from "./pages/Home/index.jsx";
import { Reservas } from "./pages/Usuario/Reservas/index.jsx";
import { Routes } from "./routes/index";

import { Header } from "./components/Header/index.jsx";
import { Footer } from "./components/Footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
