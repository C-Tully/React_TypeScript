import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { USER_PRIVLIDGE } from "../../utils/constants";

type AuthState = {
  id: string;
  isLoggedIn: boolean;
  privlidge: USER_PRIVLIDGE;
};

const initialState: AuthState = {
  id: "",
  isLoggedIn: false,
  privlidge: "GUEST",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPrivilege(state, action: PayloadAction<USER_PRIVLIDGE>) {
      state.privlidge = action.payload;
    },
    setLoggedIn(
      state,
      action: PayloadAction<{ id: string; privlidge: USER_PRIVLIDGE }>
    ) {
      state.id = action.payload.id;
      state.privlidge = action.payload.privlidge;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.id = "";
      state.privlidge = "GUEST";
      state.isLoggedIn = false;
    },
  },
});

export const { setLoggedIn, setPrivilege, logout } = authSlice.actions;
export default authSlice.reducer;
