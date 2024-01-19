import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  > img {
    max-width: 200px;
  }
`;
