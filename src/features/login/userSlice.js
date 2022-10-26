import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { authService } from "../../firebaseConfig";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user", //name of reducer function
  initialState, //default value
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // 해당 상태를 import한 컴포넌트 안에서 값을 전달받아 사용
    },
    logout: (state) => {
      state.user = null; //상태값을 직접 변경하므로 전달할 값이 없음 => payload 사용x
      signOut(authService);
    },
  },
});
export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
