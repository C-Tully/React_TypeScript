import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { USER_PRIVILIDGE } from "../../utils/constants";

export type SingleSessionState = {
  id: string;
  body: string;
  date: Date;
};

const initialState: SingleSessionState = {
  id: "",
  body: "",
  date: new Date("DD-MM-YYYY"),
};

//Todo:: Initialize collection
//Check user logged in state if needed to prefetch

export const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState,
  reducers: {},
});

//export reducers here
