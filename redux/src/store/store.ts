import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

//Requires a reducer for initializtion
//Redux then infers the type of data returned by the reducer
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

/**
 * describes data involved in dispatching
 *  to get this we want the store.dispatch property
 * and use the typeof to get the dispatch type
 */
export type AppDispatch = typeof store.dispatch;

/**
 *  The ReturnType is a TS specific type
 * its a generic type, and we want to pass the funciton t ype
 * for which we want the return value. In this acse a function Value
 * Type which then gets accessed by the ReturnType
 */
export type RootState = ReturnType<typeof store.getState>;
