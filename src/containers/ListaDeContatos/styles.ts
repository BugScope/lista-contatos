import styled from "styled-components";

export const ListaDeContatosContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding: 20px 15px 0 10px;
  height: 80vh;
  overflow-y: scroll;
`;
