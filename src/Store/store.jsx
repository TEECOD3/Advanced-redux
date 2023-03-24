import { configureStore } from "@reduxjs/toolkit";
import cartsliceReducer from "./Cartslice";
import UIslice from "./UI-slice";

const store = configureStore({
  reducer: {
    cartStore: cartsliceReducer,
    uiStore: UIslice.reducer,
  },
});

export default store;
