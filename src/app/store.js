import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/login/userSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
