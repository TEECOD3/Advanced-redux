import { createSlice } from "@reduxjs/toolkit";

const UIslice = createSlice({
  name: "UiSlice",
  initialState: {
    cartModal: false,
    Notification: null,
  },
  reducers: {
    toggle(state) {
      state.cartModal = !state.cartModal;
    },
    setNotification(state, action) {
      state.Notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        // status: "error",
        // title: "sending",
        // message: "sent",
      };
    },
  },
});

export const uiActions = UIslice.actions;
export default UIslice;
