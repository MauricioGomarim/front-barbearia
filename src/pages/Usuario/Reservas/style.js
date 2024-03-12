import styled from "styled-components";
import bg from "../../../assets/img2.jpg";

export const Container = styled.div`
  .background {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    opacity: 0.1;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .seta {
    padding: 30px;
    width: fit-content;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;

  .reservas {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
`;

export const Table = styled.table`

  thead {
    background-color: ${({ theme }) => theme.COLORS.BASE_2};
    
    td {
      padding: 10px;
      font-weight: 700;
      border: 1px solid #7A7A7A;
    }
    .services-column {
      width: 500px;
    }
    .status-column {
      width: 200px;
    }
    .datas-column, .horas-column, .valor-column {
      width: 100px;
    }
  }

  tbody {
    tr {
      background-color: #212121;
    }
    td {
      padding: 10px;
      border: 1px solid #7A7A7A;
    }

    .Pendente {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    .Aprovado {
      color: ${({ theme }) => theme.COLORS.GREEN};
    }
    .Recusado {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }


  
`
