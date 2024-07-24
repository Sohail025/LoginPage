import { configureStore } from "@reduxjs/toolkit";
import userData from "./FormSlice";
export const store = configureStore({
  reducer: userData,
});
