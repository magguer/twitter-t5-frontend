import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.userName = action.payload.user;
      state.userToken = action.payload.token;
      state.userId = action.payload.userId;
    },
    logOut(state, action) {
      return state = {}
    },
  },
});

export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
