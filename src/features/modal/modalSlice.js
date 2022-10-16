import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal", //name of reducer function
  initialState, //default value
  reducers: {
    openRegi: (state, action) => {
      state.isOpen = true;
    },
    closeRegi: (state, action) => {
      state.isOpen = false;
    },
  },
});

//selectors
export const { openRegi, closeRegi } = modalSlice.actions;
export default modalSlice.reducer;
