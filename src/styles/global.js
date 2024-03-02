import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container-login {
  width: 100%;
  max-width: 400px;
  background-color: #333333;

  border-radius: 20px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);

  padding: 50px 30px;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  > h1 {
    font-size: 25px;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 600;
    margin-bottom: 30px !important;
  }

  a {
    font-weight: 600;
    font-size: 14px;
  }

  p {
    font-weight: 500;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  .container-input {
    position: relative;

    input:focus ~ .label {
      left: 0;
      top: -20px;
      font-size: 12px;
    }
  }

  img {
    max-width: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 50;
    filter: brightness(0) invert(1);
    cursor: pointer;
  }

  .label {
    position: absolute;
    z-index: 20;
    left: 20px;
    top: 10px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.5s ease;
  }

  .inputHasValue {
    left: 0;
    top: -20px;
    font-size: 12px;
  }
}

    .MuiSlider-root {
        color: #EC8C08 !important;
    }

    .dots svg {
        margin: 0 !important;
    }

    .dots > button {
        background-color: #EC8C08 !important;
        width: 35px;
    height: 30px;
    }

    .dots div[data-testid="flowbite-dropdown"] svg {
        margin-right: 0.5rem !important;
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
