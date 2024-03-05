import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 50px;
    text-align: center;
img {
    max-width: 400px;
    width: 100%;
    margin-bottom: 20px;
}

p {
    margin-bottom: 30px;
}

h1 {
    font-weight: 800;
    font-size: 32px;
}

.botao {
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
}


`