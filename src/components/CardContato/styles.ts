import styled from "styled-components";
import * as enums from "../../utils/enums/Contatos";

interface PropsBotao {
  tipo: "editar" | "excluir" | "salvar" | "cancelar";
}

interface PropsTag {
  grupo?: enums.Grupo;
}

function CorBotao({ tipo }: PropsBotao): string {
  switch (tipo) {
    case "editar":
      return "#FF8C00";
    case "excluir":
    case "cancelar":
      return "#FF0000";
    case "salvar":
      return "#008000";
    default:
      return "#000000";
  }
}

function Grupo({ grupo }: PropsTag) {
  if (grupo === enums.Grupo.TRABALHO) {
    return "#FF8C00"; // Laranja
  } else if (grupo === enums.Grupo.FAMILIA) {
    return "#008000"; // Verde
  } else if (grupo === enums.Grupo.AMIGOS) {
    return "#0000FF"; // Azul
  }
  return "#808080"; // Cinza padrão
}

export const Card = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 16px;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const CardTitulo = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;

export const BlocoTags = styled.div`
  margin: 10px 0;
`;

export const CardTag = styled.span<PropsTag>`
  padding: 8px;
  margin-right: 8px;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(Props) => Grupo(Props)};
  border-radius: 10px;
  color: #ffffff;
`;

export const CardDescricao = styled.textarea`
  font-size: 1rem;
  line-height: 24px;
  margin-top: 10px;
  resize: none;
  height: 100px;
  border: none;
  background-color: transparent;
`;

export const CardAcoes = styled.div`
  padding-top: 16px;
`;

export const CardBotoes = styled.button<PropsBotao>`
  padding: 8px 16px;
  background-color: ${(Props) => CorBotao(Props)};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 15px;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 10px;

  &:hover {
    filter: brightness(70%);
  }
`;
