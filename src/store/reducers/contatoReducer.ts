import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/Contatos";
import { ContatoModel } from "../../models/contatoModel";

type Contato = {
  id: number;
  titulo: string;
  grupo: enums.Grupo;
  descricao: string;
};

type ContatoState = {
  contatos: Contato[];
};

const initialState: ContatoState = {
  contatos: [
    {
      id: 1,
      titulo: "Contato 1",
      grupo: enums.Grupo.FAMILIA,
      descricao: "Descrição do Contato 1",
    },
    {
      id: 2,
      titulo: "Contato 2",
      grupo: enums.Grupo.AMIGOS,
      descricao: "Descrição do Contato 2",
    },
  ],
};

const contatoSlice = createSlice({
  name: "contato",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<ContatoModel>) => {
      const indexContato = state.contatos.findIndex(
        (con) => con.id === action.payload.id
      );
      if (indexContato >= 0) {
        state.contatos[indexContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<ContatoModel>) => {
      const contatoExistente = state.contatos.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      );

      if (contatoExistente) {
        alert("Contato já existe");
      } else {
        state.contatos.push(action.payload);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatoSlice.actions;
export default contatoSlice.reducer;
