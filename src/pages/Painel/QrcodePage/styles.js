import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: auto 90vh;
  grid-template-areas: 'header header' 'menu content';
  transition: all 0.5s ease;

  .content {
    grid-area: content;
    background-color: #fff;
  }
`;
