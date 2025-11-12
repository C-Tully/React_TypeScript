import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TestState = {
  type: boolean;
  label: string;
};

const initialState: TestState = {
  type: false,
  label: "Start",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setLabel(state, action: PayloadAction<string>) {
      state.label = action.payload;
    },
    setType(state, action: PayloadAction<boolean>) {
      state.type = action.payload;
    },
  },
});

export const { setLabel, setType } = testSlice.actions;

export default testSlice.reducer;
