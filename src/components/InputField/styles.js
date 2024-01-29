import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 20px;
  z-index: 50;
  img {
    max-width: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 30;
    filter: brightness(0) invert(1);
    cursor: pointer;
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

  input:focus ~ .label {
    left: 0;
    top: -20px;
    font-size: 12px;
  }

  .inputHasValue {
    left: 0;
    top: -20px;
    font-size: 12px;
  }

  .input {
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 600;
    padding: 8px 50px 8px 20px;
    transition: all 0.5s ease;
    text-align: start;
    border-radius: 10px;
    width: 100%;
    position: relative;

    &:focus {
      background-color: ${({ theme }) => theme.COLORS.BASE};
    }
  }
`;