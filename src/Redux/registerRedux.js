import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const registerSlice = createSlice({
    name:"register",
    initialState: {
        username: null,
        email: null,
        password:null
    },
    reducers:{
       register:(state,action) => {
        state.username=action.payload.username
        state.email=action.payload.email
        state.password=action.payload.password
       },}
});

export const {register} =registerSlice.actions;
export default registerSlice.reducer;