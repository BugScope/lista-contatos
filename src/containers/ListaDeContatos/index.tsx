import { useSelector } from "react-redux";

import * as S from "./styles";
import CardContato from "../../components/CardContato/indes";
import { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contato);
  const { termo, valor, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraContatos = () => {
    let contatosFiltrados = contatos;
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (con) => con.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      );
    }
    if (criterio === "grupo") {
      contatosFiltrados = contatosFiltrados.filter(
        (con) => con.grupo === valor
      );
    }
    return contatosFiltrados;
  };

  return (
    <S.ListaDeContatosContainer>
      <div>
        <p>
          {filtraContatos().length} Tarefas marcadas como: {valor} {termo}
        </p>
        <ul>
          {filtraContatos().map((con) => (
            <li key={con.id}>
              <CardContato
                id={con.id}
                titulo={con.titulo}
                grupo={con.grupo}
                descricao={con.descricao}
              />
            </li>
          ))}
        </ul>
      </div>
    </S.ListaDeContatosContainer>
  );
};

export default ListaDeContatos;
