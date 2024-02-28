import styled from "styled-components";


export const Container = styled.div`


`
export const Button = styled.button`
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border: 1px solid ${({ theme }) => theme.COLORS.ORANGE};
        color: ${({ theme }) => theme.COLORS.BASE};
        font-weight:  800;
        text-transform: uppercase;
        text-align: center;
        padding: 8px 40px;
        transition: all 0.5s ease;
        text-align: center;
        border-radius: 12px;
    
        &:hover {
                background-color: ${({ theme }) => theme.COLORS.BASE};
        color: ${({ theme }) => theme.COLORS.ORANGE};
        }

`
    

