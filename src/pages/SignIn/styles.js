import styled from "styled-components";
import bg from "../../assets/bg-login.jpg";

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
  max-width: 450px;
  height: 50vh;
  background-color: #ff854df5;

  border-radius: 20px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.29);

  padding: 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  > h1 {
    font-size: 25px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
