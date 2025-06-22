import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

//Requires a reducer for initializtion
//Redux then infers the type of data returned by the reducer
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
