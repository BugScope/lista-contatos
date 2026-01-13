import styled from "styled-components";

interface Props {
  ativo?: boolean;
}

export const Card = styled.div<Props>`
  padding: 10px;
  margin-top: 10px;
  border-bottom: 1px solid ${(Props) => (Props.ativo ? "#32CD32" : "#ccc")};
  background-color: ${(Props) => (Props.ativo ? "#32CD32" : "#fff")};
  color: ${(Props) => (Props.ativo ? "#fff" : "#000")};
  border-radius: 10px;
  display: flex;
  cursor: pointer;
`;

export const CardContador = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 15px;
`;

export const CardTitulo = styled.h3`
  font-size: 1.1rem;
`;
