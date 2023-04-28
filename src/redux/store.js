import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
