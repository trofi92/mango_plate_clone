import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/login/userSlice";
import stateReducer from "../features/state/stateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    state: stateReducer,
  },
});
