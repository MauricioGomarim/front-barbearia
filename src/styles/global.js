import { createGlobalStyle } from "styled-components";
   

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .MuiSlider-root {
        color: #EC8C08 !important;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2s;
    }



  .container-page {
    transition: all 1s ease-in-out;
  }

 

    body,input,button, textarea, select{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        outline: none;
    }

    input, select{
        border: none;
        outline: none;
    }

    .hidden {
        display: none !important;
    }


`;
