import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { USER_PRIVILIDGE } from "../../utils/constants";

type AuthState = {
  id: string;
  isLoggedIn: boolean;
  privilidge: USER_PRIVILIDGE;
};

const initialState: AuthState = {
  id: "",
  isLoggedIn: false,
  privilidge: "GUEST", //default
};

export const authSlice = createSlice({
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
      state.id = action.payload.id;
      state.privilidge = action.payload.privilidge;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.id = "";
      state.privilidge = "GUEST";
      state.isLoggedIn = false;
    },
  },
});

export const { setLoggedIn, setPrivilege, logout } = authSlice.actions;
