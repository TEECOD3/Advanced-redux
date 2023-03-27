import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  cartItems: [],
  totalquantity: 0,
};

const cartslice = createSlice({
  name: "CartSlice",
  initialState: initialstate,
  reducers: {
    addtocart: (state, action) => {
      state.totalquantity++;
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      state.totalquantity--;
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
    clearCart: () => {},
  },
});

export const cartActions = cartslice.actions;
export default cartslice.reducer;
