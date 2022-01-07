import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import registerRedux from "./registerRedux";

export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        register: registerRedux,
    },
});