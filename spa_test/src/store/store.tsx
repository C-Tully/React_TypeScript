import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import testReducer from "./testSlices/testSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
