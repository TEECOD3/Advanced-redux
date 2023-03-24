import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  cartItems: [],
  totalAmount: 0,
};

const cartslice = createSlice({
  name: "CartSlice",
  initialState: initialstate,
  reducers: {
    addtocart: (state, action) => {
      console.log(action.payload);
      const updatedTotalAmount =
        totalAmount + cartItems.price * cartItems.amount;
      const exisitingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cartItems.at(exisitingItemIndex);
      let updatedItems;

      if (existingItem) {
        const updateditem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        updatedItems = [...state.cartItems];
        updatedItems[exisitingItemIndex] = updateditem;
      } else {
        updatedItems = cartItems.concat(action.payload);
      }
    },
    removeFromCart: (state, action) => {},
    clearCart: () => {},
  },
});

export const cartActions = cartslice.actions;
export default cartslice.reducer;
