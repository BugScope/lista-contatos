import * as enums from "../utils/enums/Contatos";

export class ContatoModel {
  id: number;
  titulo: string;
  grupo: enums.Grupo;
  descricao: string;

  constructor(
    id: number,
    titulo: string,
    grupo: enums.Grupo,
    descricao: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.grupo = grupo;
    this.descricao = descricao;
  }
}
