import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error:null,
    },
    reducers:{
       loginStart:(state) => {
        state.isFetching=true
        state.error=null;
       },
       loginSuccess:(state,action) => {
        state.isFetching=false;
        state.currentUser=action.payload.username;
        state.error=false;
    },
    loginFailure:(state) => {
        state.isFetching=false;
        state.error=true;
    },
    logOut:(state) => {
        state.currentUser=null;
        state.error=null;
        state.isFetching=false;
    }
}
});

export const {loginStart,loginSuccess,loginFailure,logOut} =userSlice.actions;
export default userSlice.reducer;