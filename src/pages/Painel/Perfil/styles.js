import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: auto 90vh;
  grid-template-areas: "header header" "menu content";
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    .foto-perfil {
      width: 100% !important;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
    form {
      width: 100% !important;
    }
    grid-template-rows: auto auto !important;
  }

  .botao {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }
  .content {
    grid-area: content;
    background-color: #f8f8f8;
  }
  .conteudo {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    padding: 0 30px;

    .formulario {
      display: flex;
      flex-wrap: wrap;
      gap: 5%;
    }

    .foto-perfil {
      width: 20%;
    }
    form {
      width: 75%;
      height: fit-content;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .conteudo h1 {
    font-weight: 700;
    color: black;
    font-size: 32px;
  }

  .conteudo .formulario {
    padding-top: 50px;
  }

  .conteudo .formulario img {
    max-width: 250px;
    width: 100%;
    border-radius: 50px;
  }
`;
