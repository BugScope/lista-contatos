import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import { remover, editar } from "../../store/reducers/contatoReducer";
import { ContatoModel } from "../../models/contatoModel";

type Props = ContatoModel;

const CardContato = ({ id, titulo, descricao, grupo }: Props) => {
  const [editando, setEditando] = useState(false);
  const [descricaoNova, setDescricaoNova] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (descricao.length > 0) {
      setDescricaoNova(descricao);
    }
  }, [descricao]);

  function cancelarEdicao() {
    setEditando(false);
    setDescricaoNova(descricao);
  }

  return (
    <S.Card>
      <S.CardTitulo>{titulo}</S.CardTitulo>
      <S.BlocoTags>
        <S.CardTag grupo={grupo}>{grupo}</S.CardTag>
      </S.BlocoTags>
      <S.CardDescricao
        placeholder="Descrição do contato"
        value={descricaoNova}
        disabled={!editando}
        onChange={(e) => setDescricaoNova(e.target.value)}
      />
      <S.CardAcoes>
        {editando ? (
          <>
            <S.CardBotoes
              tipo="salvar"
              onClick={() =>
                dispatch(
                  editar({
                    descricao: descricaoNova,
                    id,
                    titulo,
                    grupo,
                  }),
                  setEditando(false)
                )
              }
            >
              Salvar
            </S.CardBotoes>
            <S.CardBotoes onClick={() => cancelarEdicao()} tipo="cancelar">
              Cancelar
            </S.CardBotoes>
          </>
        ) : (
          <>
            <S.CardBotoes onClick={() => setEditando(true)} tipo="editar">
              Editar
            </S.CardBotoes>
            <S.CardBotoes tipo="excluir" onClick={() => dispatch(remover(id))}>
              Excluir
            </S.CardBotoes>
          </>
        )}
      </S.CardAcoes>
    </S.Card>
  );
};

export default CardContato;
