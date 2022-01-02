import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./cartRedux";

export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
    },
});