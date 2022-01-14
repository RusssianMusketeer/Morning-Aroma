import "./Register.styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerRequest } from "../../Redux/api-calls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [ username, setUserName] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state)=>(state.user.currentUser));
    let navigate = useNavigate();

    const handleClick =(e) => {
    e.preventDefault();
    registerRequest(dispatch, {username, password,email});
    }

    if ( user != null){
        navigate("/account")
    }
    
    return (
        <section className="register-section">
            <h1>Register</h1>
            <form onSubmit={handleClick}>
                <div className="div-registration">
                <input placeholder="Username" required onChange={(e)=> setUserName(e.target.value)}></input>
                <input placeholder="Email" type="email" required onChange={(e)=> setEmail(e.target.value)}></input>
                <input placeholder="Password" type="password" required onChange={(e)=> setPassword(e.target.value)}></input>
                <input  className="button_register"type="submit" value="create" ></input>
                <h3><Link to ="/shop">Return to store</Link></h3>
                </div>
            </form>

        </section>
    )
};

export default Register;