import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import * as enuns from "../../utils/enums/Contatos";
import { ContatoModel } from "../../models/contatoModel";
import { cadastrar } from "../../store/reducers/contatoReducer";

const FormularioCadastro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nomeContato, setNomeContato] = useState("");
  const [descricaoContato, setDescricaoContato] = useState("");
  const [grupoContato, setGrupoContato] = useState(enuns.Grupo.AMIGOS);

  const cadastrarContato = () => (e: FormEvent) => {
    e.preventDefault();
    const novoContato = new ContatoModel(
      10,
      nomeContato,
      grupoContato,
      descricaoContato
    );

    dispatch(cadastrar(novoContato));
    navigate("/");
  };

  return (
    <>
      <S.FormCadatro onSubmit={cadastrarContato()}>
        <S.TituloCadastro>Cadastro de Contato</S.TituloCadastro>
        <S.InputNome
          value={nomeContato}
          onChange={(e) => setNomeContato(e.target.value)}
          type="text"
          placeholder="Nome do Contato"
        />
        <S.TextareaDescricao
          value={descricaoContato}
          onChange={({ target }) => setDescricaoContato(target.value)}
          placeholder="Descrição do Contato"
        />
        <S.InputGrupo>
          <S.TituloGrupo>Selecione o Grupo</S.TituloGrupo>
          {Object.values(enuns.Grupo).map((grupo) => (
            <S.InputGrupo key={grupo}>
              <input
                value={grupo}
                name="Grupo"
                type="radio"
                id={grupo}
                onChange={(e) => setGrupoContato(e.target.value as enuns.Grupo)}
                defaultChecked={grupo === enuns.Grupo.AMIGOS}
              />
              <label htmlFor={grupo}>{grupo}</label>
            </S.InputGrupo>
          ))}
        </S.InputGrupo>
        <S.BotaoAcoes>
          <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
          <S.BotaoCancelar to={"/"}>Cancelar</S.BotaoCancelar>
        </S.BotaoAcoes>
      </S.FormCadatro>
    </>
  );
};

export default FormularioCadastro;
