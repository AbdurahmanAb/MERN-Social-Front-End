import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    loginU: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { loginU } = UserSlice.actions;
export default UserSlice.reducer;
