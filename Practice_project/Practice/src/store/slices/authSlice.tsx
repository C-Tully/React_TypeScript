import { createSlice, createAsyncThunk, PayloadAction } from "@redux/toolkit";
import { type FormState } from "../../utils/constants.tsx";
import { get } from "../../utils/http.tsx";

type AuthState = {
  user: string | null;
  status: FormState;
  error: string | null;
};

const initState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const loginUser = createAsyncThunk("", async () =>
  // {
  //   uName,
  //   uPass,
  // }: {
  //   uName: string;
  //   uPass: string;
  // },
  // thunkAPI
  {
    try {
      await new Promise((resolve, reject) => {
        //do some stuff
      });
    } catch (error) {}
  }
);
