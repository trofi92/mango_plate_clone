import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  state: null,
};

export const stateSlice = createSlice({
  name: "fuck", //name of reducer function
  initialState, //default value
  reducers: {
    on: (state) => {
      state.value = true;
    },
    off: (state) => {
      state.value = false;
    },
    changeState: (state, action) => {
      state.mode = action.payload;
    },
  },
});

//selectors
export const { on, off, changeState } = stateSlice.actions;
export default stateSlice.reducer;
