import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlocoGrupo = styled.aside`
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InputBusca = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Grupo = styled.div`
  width: 80%;
  margin-top: 20px;
  padding: 15px;
`;

export const TituloGrupo = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

export const NovoContato = styled(Link)`
  padding: 10px;
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: block;
  margin-top: 20px;
  background-color: #32cd32;
  color: #fff;
`;
