import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartModalOpen: false,
};

const UIslice = createSlice({
  name: "UiSlice",
  initialState: initialState,
  reducers: {
    openmodal: (state) => {
      state.cartModalOpen = true;
    },
    closemodal: (state) => {
      state.cartModalOpen = !state.cartModalOpen;
    },
  },
});

export const uiActions = UIslice.actions;
export default UIslice.reducer;
