import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {
        getTweets(state, action) {
            return action.payload
        },
        postTweet(state, action) {
            state.unshift({ ...action.payload.newTweet, user: action.payload.user })
        },
        deleteTweet(state, action) {
            return state.filter((tweet) => tweet._id !== action.payload._id)
        },
        /*  likeTweet(state, action){
            console.log(action.payload)
            console.log(state.like)
            return state
        } */
    },
});

export const { getTweets, postTweet, deleteTweet, likeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
