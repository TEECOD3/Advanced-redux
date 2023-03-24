import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  cartItems: [],
  totalAmount: 0,
};

const cartslice = createSlice({
  name: "CartSlice",
  initialState: initialstate,
  reducer: {
    addtocart: (state, action) => {},
    removeFromCart: (state, action) => {},
    clearCart: () => {},
  },
});

export const cartActions = cartslice.actions;
export default cartslice.reducer;
