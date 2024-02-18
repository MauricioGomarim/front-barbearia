import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: auto auto;
  grid-template-areas: "header header" "menu content";
  transition: all 0.5s ease;

  .horas {
    color: red;
  }
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
    grid-template-rows: auto 90vh !important;
  }

  .botao {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    margin-top: 30px;
  }
  .content {
    grid-area: content;
    background-color: #f8f8f8;
    padding-bottom: 100px;
  }
  .conteudo {
    max-width: 1200px;
    margin: 0 auto;
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
    margin-top: 50px;
  }

  .conteudo .formulario img {
    max-width: 250px;
    border-radius: 50px;
  }
`;

export const Section = styled.div`
  .column-img {
    padding: 10px !important;

    img {
      height: 100px;
      width: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }
  .header-servicos-tabela,
  .linha-servicos-tabela {
    padding: 20px 0;
    .header-tabela div {
      border-right: 2px solid red;
      max-height: 50px;
    }

    .header-tabela div {
      border-right: 2px solid gray;
      padding-left: 20px;
    }

    .header-tabela div:first-child {
      padding: 0;
    }

    .header-tabela div:last-child {
      border: none;
    }

    h1 {
      font-size: 18px;
    }
  }

  .linha-servicos-tabela {
    margin-bottom: 40px;
  }
  .linha {
    width: 100%;
    padding: 0 20px;
    display: flex;
    color: black;
    font-weight: 700;
  }
  .header-servicos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 40px;
    gap: 20px;
  }

  .servicos {
    background-color: #ffffff;
    border: 1px solid #c6c6c6;
    height: 60vh;
    border-radius: 20px;
    padding: 30px 0;
    overflow-y: auto;
  }

  .stars {
    display: flex;
    gap: 2px;
    margin-bottom: 20px;
  }

  .icon-search {
    background: #ec8c08;
    display: flex;
    width: fit-content;
    padding: 5px 15px;
    border-radius: 5px;

    svg {
      font-size: 25px;
      color: black;
    }
  }

  .icon-orange {
    background: #ec8c08;
    display: flex;
    width: fit-content;
    padding: 5px 15px;
    border-radius: 5px;

    svg {
      font-size: 25px;
      color: black;
    }
  }

  .icon-red {
    background: #ff4040;
    display: flex;
    width: fit-content;
    padding: 5px 15px;
    border-radius: 5px;

    svg {
      font-size: 25px;
      color: black;
    }
  }

  .conteiner-servicos-mobile {
    display: none;
  }
  .card-servico-mobile {
    display: flex;
    margin-top: 30px;
    position: relative;

    .dots {
      color: #000;
      font-size: 32px;
      font-weight: 700;
      background-color: #ffffff63;
      position: absolute;
      right: 10px;
      top: 10px;
      border-radius: 10px;
      height: 35px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        background-color: #ffffff99;
      }
      img {
        max-width: 23px;
      }
    }
    .img-servico {
      width: 30%;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }

    .content-servico {
      width: 70%;
      background: ${({ theme }) => theme.COLORS.BASE_2};
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 20px;

      h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
      }

      p {
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .conteiner-servicos-mobile {
    border-radius: 20px;
    .stars {
      display: flex;
      gap: 5px;

      img {
        max-width: 18px;
      }
    }
  }

  @media (max-width: 650px) {
    .servicos,
    .header-servicos-tabela {
      display: none;
    }
    .conteiner-servicos-mobile {
      display: block;
    }
  }
`;
