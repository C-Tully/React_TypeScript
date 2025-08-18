import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice"; // adjust path as needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // add other reducers here
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
