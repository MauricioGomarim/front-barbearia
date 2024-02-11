import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
  z-index: 20;
  position: relative;
  grid-area: header;

`;

export const Content = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;

  > .logo img {
    max-width: 200px;
    filter: brightness(0);
    height: 10vh;
    width: 100%;
    padding: 10px 0;
  }
  > .nav-user {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;

    .dropdown.menu-active {
      padding: 15px 0px 0px 0px;
      opacity: 1;
      overflow: hidden;
      transition: all 0.5s ease;
    }

    .dropdown {
      transition: all 0.5s ease;
      position: absolute;
      right: 0;
      top: 100%;
      width: 300px;
      height: auto;
      opacity: 0;
      padding: 0;
      overflow: hidden;
      background-color: ${({ theme }) => theme.COLORS.BASE};
      border-radius: 15px;

      svg {
        font-size: 30px;
      }
      .header-dropdown {
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid #ffffff69;
        padding-bottom: 15px;
      }
      .coluna-infos {
        display: flex;
        gap: 10px;
        padding-left: 15px;
      }
      .coluna-button {
        padding-right: 15px;
      }
      .coluna-button a,
      .login a {
        background-color: #ffffff0d;
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12px;
        text-transform: uppercase;
      }

      .coluna-button a:hover,
      .login a:hover {
        background-color: #ffffff21;
      }
      .header-dropdown img {
        background-color: #fff;
        border-radius: 100%;
        height: fit-content;
      }
      .header-dropdown h1 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1rem;
      }
      .header-dropdown p {
        font-size: 14px;
      }
      ul {
        border-bottom: 1px solid #ffffff69;
        
        display: flex;
        flex-direction: column;
      }
      ul li {
        padding: 15px 15px;
      }
      ul li:hover {
        background-color: #ffffff21;
      }
      ul li a {
        font-size: 14px !important;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;

        &:hover {
        }
      }

      ul li a p {
        font-size: 12px;
        font-weight: 600;
        color: #a8a5a5;
      }

      .footer-dropdown {
        ul {
          border: none;
          padding-bottom: 0;
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
