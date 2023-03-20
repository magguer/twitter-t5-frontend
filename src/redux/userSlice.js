import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      return action.payload
    },
    edit(state, action) {
      state.userName = action.payload.username;
      state.userFirstname = action.payload.firstname;
      state.userLastname = action.payload.lastname;
    },
    follow(state, action) {
      state.userFollowing.push(action.payload)
    },
    unfollow(state, action) {
      const following = state.userFollowing.filter((user) => user.username !== action.payload.username)
      return { ...state, userFollowing: following }
    },
    logOut(state, action) {
      return null;

    },
  },
});

export const { login, logOut, follow, unfollow, edit } = userSlice.actions;
export default userSlice.reducer;
