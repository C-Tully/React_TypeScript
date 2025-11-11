import {
  createSlice,
  type PayloadAction,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { USER_PRIVILIDGE } from "../../utils/constants";
import { post } from "../../utils/http";

type AuthState = {
  id: string;
  isLoggedIn: boolean;
  privilidge: USER_PRIVILIDGE;
  //loading: false
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
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.privilidge = action.payload.privilidge;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.id = "";
        state.privilidge = "GUEST";
      });
  },
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { username: string }, thunkAPI) => {
    try {
      console.log("React:: thunk:: loginUser::");
      const response = await post<
        {
          id: string;
          privilidge: USER_PRIVILIDGE;
        },
        typeof credentials
      >("/api/login", credentials);

      console.log("RESPONSE::", response);

      return response;
    } catch (error) {
      console.log("AuthSlice::loginUser::error::", error);
      return thunkAPI.rejectWithValue("Login failed");
    }
  }
);

export const { setLoggedIn, setPrivilege, logout } = authSlice.actions;
export default authSlice.reducer;
