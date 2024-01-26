import styled from "styled-components";
import bg from "../../assets/bg-login.png";

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #333333e6;

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
`;
