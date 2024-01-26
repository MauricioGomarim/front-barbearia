import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
  z-index: 20;
  position: relative;
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
    position: relative;

    .dropdown.menu-active {
      padding: 10px 20px;
      height: auto;
      overflow: visible;
      overflow: hidden;
      transition: all 0.5s ease;
    }

    .dropdown {
      transition: all 0.5s ease;
      position: absolute;
      right: 0;
      top: 100%;
      width: 200px;
      height: 0px;
      padding: 0;
      overflow: hidden;
      background-color: #fff;
      border-radius: 10px;

      ul li a {
        font-size: 14px !important;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.BASE};
        width: 100%;
        display: block;

        &:hover {
        }
      }
    }

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
      cursor: pointer;
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
