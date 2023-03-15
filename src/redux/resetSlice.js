import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const resetSlice = createSlice({
    name: "reset",
    initialState,
    reducers: {
        actualize(state, action) {
            return state = !state;
        },
    },
});

export const { actualize } = resetSlice.actions;
export default resetSlice.reducer;
