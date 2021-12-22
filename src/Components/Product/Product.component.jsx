import react from "react";
import arrow from "../../Assets/next.png";
import image from "../../Assets/Coffe-Bag.png";
import { useParams } from 'react-router-dom'
import "./Product.styles.scss";
import { useLocation } from "react-router-dom";

const Product = () => {
    const { product } = useParams();
    const location= useLocation();
    const state= location.state.prop;
    return (
        <section className="Product-section">
            <div className="Product-div">
        <h5 className="Product-info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="Product-Tag">{product}</h5>
        </div>
        <div className="Product-image-info">
            <img alt="coffe" src={image} className="Coffe-Image-Product"/>
            <div style={{display:"flex",flexDirection:"column"}}>
            <h3>Morning Aroma</h3>
            <h1>{state.name}</h1>
            <span>{state.price}</span>
                <label for="Coffe">Grind</label>
                <select name="Coffe-Grind" id="grind">
                <option value="Whole Bean">Whole Bean</option>
                <option value="French Press">French Press</option>
                <option value="Turkish">Turkish</option>
                <option value="Stove Top Express">Stove Top Express</option>
                </select>
            </div>
        </div>

        </section>
    )
};

export default Product;