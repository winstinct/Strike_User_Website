import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const createUserSlice = createSlice({
    name: "createUser",
    initialState: initialState,
    reducers: {
        addUserDetails(state, action) {
           return state = {...state, ...action.payload}
        }
    }
})

export const { addUserDetails} = createUserSlice.actions;

export default createUserSlice.reducer;