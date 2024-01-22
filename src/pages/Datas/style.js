import styled from "styled-components";
import bg from "../../assets/img2.jpg";

export const Container = styled.div`
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
      // width: 8%;
      padding: 20px 5px;
      border-radius: 20px;
      text-align: center;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BASE};

      h2 {
        font-weight: 700;
        margin-bottom: 5px;
      }
    }

    @media (max-width: 768px) {
      .data {
        //width: 23%;
      }
    }

    @media (max-width: 425px) {
      .data {
        // width: 32%;
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
