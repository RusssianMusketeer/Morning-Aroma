import "./SignIn.styles.scss";
import { Link } from "react-router-dom";
import { useState} from "react";
import { login} from "../../Redux/api-calls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [ username, setuserName] = useState("");
    const [ password, setPassword] = useState("");
    const dispatch = useDispatch();
    const error = useSelector((state)=>(state.user.error));
    const user = useSelector((state)=>(state.user.currentUser));
    let navigate = useNavigate();
    

    const handleClick = async(e)=> {
        e.preventDefault();
         login(dispatch, {username, password});
    }
    if ( user != null){
        navigate("/account")
    }
    return (
        <section className="create-section">
            <h1>Sign In</h1>
            
            <form>
                <div>
                {error ? 
            <div className="div-error">
                <h2>Incorrect email or password</h2>
            </div>    
         : null}
                <input placeholder="Username"
                onChange={(e)=> setuserName(e.target.value)}
                ></input>
                <input placeholder="Password"
                onChange={(e)=> setPassword(e.target.value)}
                ></input>
                <button onClick={handleClick}>Sign In</button>
                </div>
                <div style={{position:"relative",top:"-6px"}}>
                <h3 style={{marginTop:"0"}}><Link to ="password-reset">Forgot your password ?</Link></h3>
                <h3><Link to ="register">Create account</Link></h3>
                <h3><Link to ="/shop">Return to store</Link></h3>
                </div>
            </form>

        </section>
    )
};

export default SignIn;