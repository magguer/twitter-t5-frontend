import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const resetSlice = createSlice({
    name: "reset",
    initialState,
    reducers: {
        tweetsList(state, action) {
            return
        },
    },
});

export const { actualize } = resetSlice.actions;
export default resetSlice.reducer;
