import react from "react";
import "./SignIn.styles.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <section className="create-section">
            <h1>Sign In</h1>
            <form>
                <div>
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <button>Sign In</button>
                </div>
                <div style={{position:"relative",top:"-6px"}}>
                <h3 style={{marginTop:"0"}}>Forgot your password ?</h3>
                <h3><Link to ="register">Create account</Link></h3>
                <h3><Link to ="/shop">Return to store</Link></h3>
                </div>
            </form>

        </section>
    )
};

export default SignIn;