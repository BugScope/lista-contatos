import { useDispatch, useSelector } from "react-redux";
import CardFiltro from "../../components/CardFiltro";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { alteratermo } from "../../store/reducers/filtroReducer";
import * as enuns from "../../utils/enums/Contatos";

const BarraLateral = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.BlocoGrupo>
      <S.Grupo>
        <S.InputBusca
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alteratermo(e.target.value))}
        />
        <S.TituloGrupo>Selecione o Grupo</S.TituloGrupo>
        <CardFiltro criterio="todos" legenda="Todos" />
        <CardFiltro
          valor={enuns.Grupo.FAMILIA}
          criterio="grupo"
          legenda="Familia"
        />
        <CardFiltro
          valor={enuns.Grupo.AMIGOS}
          criterio="grupo"
          legenda="Amigos"
        />
        <CardFiltro
          valor={enuns.Grupo.TRABALHO}
          criterio="grupo"
          legenda="Trabalho"
        />
        <S.NovoContato to="/novo">Novo Contato</S.NovoContato>
      </S.Grupo>
    </S.BlocoGrupo>
  );
};

export default BarraLateral;
