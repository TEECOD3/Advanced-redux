import { createSlice } from "@reduxjs/toolkit";

const UIslice = createSlice({
  name: "UiSlice",
  initialState: {
    cartModal: false,
  },
  reducers: {
    toggle(state) {
      state.cartModal = !state.cartModal;
    },
  },
});

export const uiActions = UIslice.actions;
export default UIslice;
