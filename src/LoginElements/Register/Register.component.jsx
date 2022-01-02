import react from "react";
import "./Register.styles.scss";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="register-section">
            <h1>Register</h1>
            <form>
                <div>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <button>Create</button>
                <h3><Link to ="/shop">Return to store</Link></h3>
                </div>
            </form>

        </section>
    )
};

export default Register;