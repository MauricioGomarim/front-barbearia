import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BASE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.BASE};
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  padding: 5px 25px;
  font-size: 14px;

  text-align: center;
  border-radius: 20px;
  display: flex;
  align-items: center;

  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.WHITE} !important;
    color: ${({ theme }) => theme.COLORS.BASE} !important;
  }

  &:disabled {
    background-color: #2e2e2ee8 !important;
    color: #838383 !important;
  }
`;
