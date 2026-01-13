import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormCadatro = styled.form`
  margin-top: 20px;
  padding: 20px;
  width: 100vh;
  margin: 0 auto;
`;

export const TituloCadastro = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputNome = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const TextareaDescricao = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const TituloGrupo = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputGrupo = styled.div`
  display: inline-block;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #666666;

  input {
    margin-right: 5px;
  }
`;

export const BotaoAcoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 50px;
`;

export const BotaoCadastrar = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const BotaoCancelar = styled(Link)`
  width: 50%;
  padding: 10px;
  background-color: red;
  text-decoration: none;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
`;
