import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user", //name of reducer function
  initialState, //default value
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
