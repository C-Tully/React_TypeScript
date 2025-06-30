import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * add any methods you need here to maniuplate reducers
     * Make suer to yse the PayloadAction when ever dealing with a
     * type that carries a payload
     * if it doesn't have the extra data, you don't need this specific type
     * The payload helps us define which data will be attached to the action
     */
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      //ReduxToolkit allows us to mutate state
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
