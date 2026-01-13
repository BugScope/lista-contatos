import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { alterarFiltro } from "../../store/reducers/filtroReducer";
import * as enuns from "../../utils/enums/Contatos";
import { RootReducer } from "../../store";

interface Props {
  legenda: string;
  criterio?: "todos" | "grupo";
  valor?: enuns.Grupo.AMIGOS | enuns.Grupo.FAMILIA | enuns.Grupo.TRABALHO;
}

const CardFiltro = ({ legenda, valor, criterio }: Props) => {
  const dispatch = useDispatch();
  const { filtro, contato } = useSelector((state: RootReducer) => state);

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor,
      })
    );
  };

  const verificaEstado = () => {
    const mesmoCriterio = filtro.criterio === criterio;
    const mesmoValor = filtro.valor === valor;

    return mesmoCriterio && mesmoValor;
  };

  const contaContatos = () => {
    if (criterio === "todos") {
      return contato.contatos.length;
    }
    return contato.contatos.filter((con) => con.grupo === valor).length;
  };

  return (
    <S.Card ativo={verificaEstado()} onClick={filtrar}>
      <S.CardContador>{contaContatos()}</S.CardContador>
      <S.CardTitulo>{legenda}</S.CardTitulo>
    </S.Card>
  );
};

export default CardFiltro;
