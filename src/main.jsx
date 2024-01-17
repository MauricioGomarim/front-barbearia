import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { GlobalStyles } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { SignIn } from "./pages/SignIn/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>
);
