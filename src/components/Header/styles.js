import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .logo img {
    max-width: 100px;
    filter: brightness(0);
  }
  > .nav-user {
    display: flex;
    align-items: center;
    gap: 30px;

    nav ul {
      display: flex;
      gap: 30px;
    }

    nav ul a {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_ESCURO};
      font-weight: 600;
    }

    img {
      max-width: 40px;
    }
  }

  > h1 {
    color: #fff;
  }

  @media (min-width: 768px) {
    .menu-burguer {
      display: none !important;
    }

  }

  @media (max-width: 768px) {
    .nav-user nav {
      display: none;
    }
  }
`;
