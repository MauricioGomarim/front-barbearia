import styled from "styled-components";
import bg from "../../../assets/bg-login.png";

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  padding: 10% 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .seta {
    padding: 30px;
    width: fit-content;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 80%;
  
  background-color: #333333e6;

  border-radius: 20px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  padding: 30px 30px 50px 30px;

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
    font-weight: 700;
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

    img {
    max-width: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 50;
    filter: brightness(0) invert(1);
    cursor: pointer;
  }
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


  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    margin-top: 40px;
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
