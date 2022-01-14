import "./reset.styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../../Redux/api-calls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Reset = () => {
    
    const [ email, setEmail] = useState("");
    
    const dispatch = useDispatch();
    const error = useSelector((state)=>(state.register.reset_error));
    
    const handleClick =(e) => {
    e.preventDefault();
    console.log("sent")
    if ( email===""){ 
        return null;
    }else {
        resetPassword(dispatch, {email});
    }
    
    }

    if(error=== true){
        
        return(
            <section className="register-section">
            <h1>Reset Password</h1>
            <p>Type your email to get a link to reset your password</p>
            <form onSubmit={handleClick} >
                    <div>
                    
                    
                    <div>
                    <div className="div-error">
                        <h2>The email address isn't recognized. Please try again or register for a new account.</h2>
                    </div>
                    <input placeholder="Email" type="email" required  onChange={(e)=> setEmail(e.target.value)}></input>
                
                    <input  className="button_register" type="submit"  ></input>
                    <h3><Link to ="/shop">Return to store</Link></h3>
                    </div>
            
            </div>
            </form>

        </section>
            )
    }else if(error===false){
        return(
            <section className="register-section">
            <h1>Reset Password</h1>
            <p>Type your email to get a link to reset your password</p>
            <form onSubmit={handleClick} >
                    <div> 
                    <div style={{textAlign:"center"}}>
                        <div className="div-success">
                        <h2>The recovery email was sent. Check your email inbox.</h2>
                        </div>
                        <h3><Link to ="/">Home</Link></h3>
                    <h3><Link to ="/shop">Return to store</Link></h3>
                    
                    </div>
            
            </div>
            </form>

        </section> 
        )
    } else {
        return(
            <section className="register-section">
            <h1>Reset Password</h1>
            <p>Type your email to get a link to reset your password</p>
            <form onSubmit={handleClick} >
                <div>
                    
                    
                    <div>
                    <input placeholder="Email" type="email" required onChange={(e)=> setEmail(e.target.value)}></input>
                
                    <input  className="button_register" type="submit"  ></input>
                    <h3><Link to ="/shop">Return to store</Link></h3>
                    </div>
            
            </div>
            </form>

        </section>
            )

    }
};

export default Reset;