import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { randomAPI } from "../services/random";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [randomAPI.reducerPath]: randomAPI.reducer
  }
});
