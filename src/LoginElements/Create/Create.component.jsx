import react from "react";
import "./Create.styles.scss";

const Create = () => {
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
                <h3>Create account</h3>
                <h3>Return to store</h3>
                </div>
            </form>

        </section>
    )
};

export default Create;