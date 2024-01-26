import styled from "styled-components";
import bg from "../../assets/bg-home.jpg";

export const Container = styled.div`
  background-color: #332f2a;
  width: 100%;

  .sec1 {
    position: relative;
    > .background {
      background-image: url(${bg});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      opacity: 0.1;
      top: 0;
      height: 100%;
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  .sec2 {
    text-align: center;
    margin-top: 50px;
    padding: 50px 20px 100px 20px;


    h1 {
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 53px;
      margin-bottom: 30px;
      text-transform: uppercase;
    }
    .tabela-horarios {
      position: relative;
      padding: 50px 100px;
      background-color: #544735;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      border-radius: 20px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      .img-barbearia-objeto {
        position: absolute;
        top: 0;
        left: -20px;
        max-width: 100px;
      }
    }
    .row-tabela {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      > h4 {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 425px) {
    .column-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.div``;
