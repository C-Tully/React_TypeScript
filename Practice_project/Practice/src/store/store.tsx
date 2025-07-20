import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice"; // adjust path as needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // add other reducers here
  },
});

// Infer the `AppDispatch` and `RootState` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
