import { configureStore } from "@reduxjs/toolkit";
import contatoReducer from "./reducers/contatoReducer";
import filtroReducer from "./reducers/filtroReducer";

export const store = configureStore({
  reducer: {
    contato: contatoReducer,
    filtro: filtroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export default store;
