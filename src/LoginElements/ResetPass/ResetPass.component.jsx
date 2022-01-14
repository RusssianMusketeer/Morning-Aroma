import "./ResetPass.styles.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPass = () => {
    
    const [ password, setPassword] = useState("");
    const [ username, setUsername] = useState("");
    const [updated, setupdated] = useState(false);
    const [errorupdated, seterrorUpdated]= useState(false)
    const [errorInvalid, setErrorInvalid] = useState(false);
    const { token } = useParams();
    
    
    const handleClick =(e) => {
    e.preventDefault();
    
     axios.put("https://morning-aroma.herokuapp.com/api/auth/new-password",{
            username: username,
            password: password,
        }).then( (response)=>{
            if(response.data.message === "password updated"){
                setErrorInvalid(null);
                setupdated(true);
                
            } else {
                seterrorUpdated(true);
            }
        }).catch(error =>{
            console.log(error.data)
        });
}

    useEffect(()=>{
        const reviewPass = async ()=> {
            await axios.get("https://morning-aroma.herokuapp.com/api/auth/password-review",{
            params: {
                resetPasswordToken: token
            },
        }).then( (response)=>{
            if(response.data.message === "password reset link a-ok"){
                setUsername(response.data.username);
            } else {
                setErrorInvalid(true);
            }
        }).catch(error =>{
            console.log(error.data)
        })
        }
        reviewPass();
    },[token])


    if(errorInvalid === false){
        return (
            <section className="register-section">
            <div>
            <h1>Reset Password</h1>
            <p>Type your new password for your account</p>
            <form onSubmit={handleClick} >
                    <div className="div-reset-pass">
                    
                    <input placeholder="Password" type="text" required onChange={(e)=> setPassword(e.target.value)}></input>
                
                    <input  className="button_register" type="submit" value="Send" ></input>
                    <h3><Link to ="/shop">Return to store</Link></h3>
                    </div>
            </form>
            </div>
            
            </section>
    )} else if(errorInvalid === true || updated===false){
    return (
        <section className="register-section">
        <div>
            <h1>Reset Password</h1>
            <p>Problem resetting password. Please send another reset link.</p>
            <form >
                    <div style={{textAlign:"center"}}>
                    <h3><Link to ="/login/password-reset">Forgot Password ?</Link></h3>
                    <h3><Link to ="/">Go Home</Link></h3>
                    </div>
            </form>
            </div>
        </section>
    )
}else if(updated === true){
    return (
        <section className="register-section">
        <div>
            <h1>Reset Password</h1>
            <p>Your password has been successfully reset, please try logging in again.</p>
            <form >
                    <div style={{textAlign:"center"}}>
                    <h3><Link to ="/login/">Login</Link></h3>
                    <h3><Link to ="/">Go Home</Link></h3>
                    </div>
            </form>
            </div>
        </section>
    )
}

};

export default ResetPass ;