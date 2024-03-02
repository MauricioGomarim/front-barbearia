import styled from "styled-components";
import bg from "../../../assets/img2.jpg";

export const Container = styled.div`
.botao-reservado {
  opacity: 0.3;
}


  .background {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    opacity: 0.1;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .seta {
    padding: 30px;
    width: fit-content;
  }
`;

export const Content = styled.div`
.container-login {
  width: 100%;
  max-width: 400px;
  background-color: #333333;

  border-radius: 20px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);

  padding: 50px 30px;

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
    margin-bottom: 10px;
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
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  .select-data {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 30px;
    }

    .datas {
      display: flex;
      flex-wrap: wrap;
      gap: 2%;
    }

    .data {
      cursor: pointer;
      padding: 20px 5px;
      border-radius: 20px;
      text-align: center;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BASE};

      h2 {
        font-weight: 700;
        margin-bottom: 5px;
      }

      p {
        text-transform: capitalize;
      }
    }

    .data.ativo {
      background-color: ${({ theme }) => theme.COLORS.ORANGE} !important;
      color: ${({ theme }) => theme.COLORS.BASE} !important;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    z-index: 100;
  }
  .swiper-button-prev:after,
  .swiper-button-next::after {
    color: #fff;
    font-size: 32px;
  }
  .swiper-button-prev {
    left: -50px;
  }
  .swiper-button-next {
    right: -50px;
  }
  .horarios {
    margin-top: 50px;
  }
  .horario {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    width: 100%;
    padding: 20px;
    border: 1px solid #6c6c6c;
    margin-bottom: 20px;
    transition: all 0.5s ease !important;

    &:nth-child(even) {
      background-color: ${({ theme }) => theme.COLORS.BASE};
    }

    &:nth-child(odd) {
      background-color: #282828;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.COLORS.ORANGE} !important;
    color: ${({ theme }) => theme.COLORS.BASE} !important;
    transition: all 0.5s ease !important;
  }
`;
