import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enuns from "../../utils/enums/Contatos";

type filtroState = {
  termo?: string;
  criterio?: "grupo" | "todos";
  valor?: enuns.Grupo;
};

const initialState: filtroState = {
  termo: "",
  criterio: "todos",
};

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alteratermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    alterarFiltro: (state, action: PayloadAction<filtroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
  },
});

export const { alteratermo, alterarFiltro } = filtroSlice.actions;
export default filtroSlice.reducer;
