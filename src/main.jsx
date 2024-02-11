import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { GlobalStyles } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes/index";
import { AuthProvider } from "./hook/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Perfil } from "./pages/Painel/Perfil"




// import { Header } from "./components/Header/index.jsx";
// import { Footer } from "./components/Footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
