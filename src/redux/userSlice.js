import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      /*       state = action.payload */
      state.userName = action.payload.userName;
      state.userToken = action.payload.userToken;
      state.userId = action.payload.userId;
      state.userFirstname = action.payload.userFirstName;
      state.userLastname = action.payload.userLastName;
      state.userImage = action.payload.userImage;
      state.userFollowers = action.payload.userFollowers
      state.userFollowing = action.payload.userFollowing
      state.userTweets = action.payload.userTweets
      console.log(current(state));
    },
    follow(state, action) {
      state.userFollowing.push(action.payload.smallUser)
    },
    unfollow(state, action) {
      const following = state.userFollowing.filter((user) => user.username !== action.payload.username)
      return { ...state, userFollowing: following }
    },
    logOut(state, action) {
      return (state = {});

    },
  },
});

export const { login, logOut, follow, unfollow } = userSlice.actions;
export default userSlice.reducer;
