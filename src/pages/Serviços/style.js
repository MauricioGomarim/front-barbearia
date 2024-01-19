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
  .select-profissional {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 30px;
    }

    .profissionais {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;

      .profissional {
        display: flex;
        align-items: center;
        gap: 20px;
        transition: all 0.5s ease;

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
    gap: 5%;
  }

  .service {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    width: 47%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 30px;

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
