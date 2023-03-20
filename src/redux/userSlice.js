import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    edit(state, action) {
      state.username = action.payload.username;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
    follow(state, action) {
      state.following.push(action.payload);
    },
    unfollow(state, action) {
      const following = state.following.filter(
        (user) => user.username !== action.payload.username
      );
      return { ...state, following: following };
    },
    logOut(state, action) {
      return null;
    },
  },
});

export const { login, logOut, follow, unfollow, edit } = userSlice.actions;
export default userSlice.reducer;
