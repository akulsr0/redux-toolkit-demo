import { createSlice } from "@reduxjs/toolkit";
import { counterState } from "./counterState";

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    reset: function (state) {
      state.value = 0;
    },
    increment: function (state) {
      state.value += 1;
    },
    decrement: function (state) {
      state.value -= 1;
    },
    setValue: function (state, action) {
      state.value = action.payload.value;
    }
  }
});

export const { reset, increment, decrement, setValue } = counterSlice.actions;
export default counterSlice.reducer;
