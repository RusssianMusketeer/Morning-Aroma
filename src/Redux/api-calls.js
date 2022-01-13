import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { register,reset,resetError, resetStart} from "./registerRedux"
import { publicRequest } from "../requestMethods";

export const login = async ( dispatch,user)=>{
    console.log(user,"user")
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch (err) {
        dispatch(loginFailure());
    }
}

export const registerRequest = async ( dispatch,user)=>{
    
    try {
        const res = await publicRequest.post("/auth/register",{
        username:user.username,
        email:user.email,
        password:user.password,
         }
        )
        console.log((res.config.data),"data")
        dispatch(register(JSON.parse(res.config.data)))
        dispatch(loginSuccess(JSON.parse(res.config.data)))
    }catch (err) {
        dispatch(loginFailure());
    }
}

export const resetPassword = async (dispatch, user)=>{
    dispatch(resetStart());
    try {
        const res = await publicRequest.post("/auth/reset",{
        email:user.email,
         }
        )
       dispatch(reset(JSON.parse(res.config.data)))
    }catch (err) {
        dispatch(resetError());
    }
}