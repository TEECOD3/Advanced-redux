import { configureStore } from "@reduxjs/toolkit";
import cartsliceReducer from "./Cartslice";
import uisliceReducer from "./UI-slice";

const store = configureStore({
  reducer: {
    cartStore: cartsliceReducer,
    uiStore: uisliceReducer,
  },
});

export default store;
