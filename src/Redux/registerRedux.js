import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice({
    name:"register",
    initialState: {
        username: null,
        email: null,
        password:null,
        reset_error:null,
    },
    reducers:{
       register:(state,action) => {
        state.username=action.payload.username
        state.email=action.payload.email
        state.password=action.payload.password
       },
       resetStart:(state) => {
        state.reset_error=null;
       },
       reset:(state,action) => {
        state.email=action.payload.email;
        state.reset_error=false;
       },
       resetError:(state) =>{
        state.reset_error=true;
       }
    }
});

export const {register,reset,resetError,resetStart} =registerSlice.actions;
export default registerSlice.reducer;