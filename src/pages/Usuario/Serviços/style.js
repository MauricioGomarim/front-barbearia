import styled from "styled-components";
import bg from "../../../assets/img2.jpg";

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

  .error-services {
    font-weight: 800;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 42px;
    }
  }
  .active {
    opacity: 1 !important;
    filter: grayscale(0) !important;
  }
  .select-profissional {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    h1 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 30px;
    }

    .profissionais {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      cursor: pointer;

      .profissional {
        display: flex;
        align-items: center;
        gap: 20px;
        transition: all 0.5s ease;
        opacity: 0.5;
        filter: grayscale(1);

        img {
          max-width: 100px;
          border-radius: 50%;
        }
        &:hover {
          transform: scale(1.05);
        }
        > p {
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }

  .btnConfirmar {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 50px;
  }

  .select-services {
    h1 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 30px;
      
    }
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 6%;
  }

  .service {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    width: 47%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      width: 100%;
    }
    .footer-card {
      display: flex;
      justify-content: space-between;
      align-items: end;

      p {
        color: ${({ theme }) => theme.COLORS.BASE};
        font-weight: 800;
      }
    }

    h1 {
      margin-bottom: 0;
    }
    img {
      max-width: 35%;
      object-fit: cover;
    }

    .stars {
      display: flex;
      gap: 2px;
      margin-bottom: 20px;
    }

    .infos {
      width: 65%;
      padding: 10px;

      h1 {
        color: ${({ theme }) => theme.COLORS.BASE};
        font-weight: 800;
      }
    }
  }
`;
