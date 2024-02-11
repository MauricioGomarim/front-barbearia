import styled from "styled-components";

export const Container = styled.div`
  grid-area: menu;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BASE};
  display: flex;
  flex-direction: column;



  .logout {
    margin-top: auto;
  }

  .logout button{
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 10px;
  }

  ul {
    padding: 0px 20px;

    li {
      font-size: 18px;
      font-weight: 600;
      overflow: hidden;
      margin-bottom: 30px;

      a {
        display: flex;
        align-items: center;
        gap: 10px;

        :hover {
          color: #fff;
        }

        img {
          width: 35px;
          height: 35px;
          user-select: none;
        }
      }

      p {
        min-width: 100px;
      }
    }

    .active {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.ORANGE} !important;
  }
  }
`;
