import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.userName = action.payload.user;
      state.userToken = action.payload.token;
      state.userId = action.payload.userId;
      console.log(current(state));
    },
    logOut(state, action) {
      return state = {}
    },
  },
});

export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
