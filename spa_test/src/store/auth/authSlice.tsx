import { createSlice } from "@reduxjs/toolkit";
import { USER_PRIVILIDGE } from "../../utils/constants";

type AuthState = {
  id: string;
  isLoggedIn: boolean;
  privilidge: USER_PRIVILIDGE;
};

const initialState: AuthState = {
  id: "",
  isLoggedIn: false,
  privilidge: "GUEST",
};

export const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPrivilege(state, action: PayloadAction<USER_PRIVILIDGE>) {
      state.privilidge = action.payload;
    },
    setLoggedIn(
      state,
      action: PayloadAction<{ id: string; privilidge: USER_PRIVILIDGE }>
    ) {
      state.id = action.id;
      state.privilidge = action.privilidge;
    },
  },
});

export function checkAuth() {
  console.log("src/auth/checkAuth::");
}
