import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  data: {},
};

const Slice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    Handler: (state) => {
      state.status = !state.status;
    },
    RegisterDataHandler: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { Handler, RegisterDataHandler } = Slice.actions;
export default Slice.reducer;
