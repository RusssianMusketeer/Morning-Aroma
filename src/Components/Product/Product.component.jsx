import arrow from "../../Assets/next.png";
import image from "../../Assets/Coffe-Bag.png";
import "./Product.styles.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CoffeData from "../../Data/products";
import Card from "../Card/Card.component";
import { useEffect} from "react";
import image2 from "../../Assets/Coffee_green.png";
import image3 from "../../Assets/Coffee_red.png";


const Product = () => {
    const location= useLocation();
   const [number, setNumber]= useState(1);
    const state= location.state.prop;
    let  type  = location.state.prop.categorie;
    let ImageCard;

    if (type==="Dark Roast") {
        ImageCard = <img alt="coffe" src={image} className="Coffe-Image-Product"/>;
      } else if (type==="Light Roast") {
        ImageCard = <img alt="coffe" src={image2} className="Coffe-Image-Product"/>;
      } else {
        ImageCard = <img alt="coffe" src={image3} className="Coffe-Image-Product"/>;  
      }

    const handleChange=(event)=>{
        setNumber(event.target.value)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [location]);

    return (
        <section className="Product-section">
            <div className="Product-div">
        <h5 className="Product-info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="Product-Tag">{state.name}</h5>
        </div>
        <div className="Product-image-info">
            {ImageCard}
            <div style={{display:"flex",flexDirection:"column"}}>
            <h3>Morning Aroma</h3>
            <h1>{state.name}</h1>
            <span className="price">${state.price}</span>
            <p>{state.description}</p>
            <div style={{display:"flex"}}>
                <div>
                <label for="Coffe">Grind</label>
                <select name="Coffe-Grind" id="grind">
                <option value="Whole Bean">Whole Bean</option>
                <option value="French Press">French Press</option>
                <option value="Turkish">Turkish</option>
                <option value="Stove Top Express">Stove Top Express</option>
                </select>

                <label className="coffe-quantity" for="Coffe">Quantity</label>
                <input type="number" id="number" min="1" value={number} onChange={handleChange}></input>
                </div>
                <div className="button-divs">
                <button  className="add-to-cart-button" type="submit">
                    <span className="Add-to-cart">Add to Cart</span>
                </button>
                <button className="Buy-it-Now-button"type="submit">
                    <span className="Buy-it-Now">Buy it now</span>
                </button>
                </div>
            </div>
            </div>
        </div>
        <div className="Product-recommendation">
                <h2 className="recommendation-tag">You may also like</h2>
                <div className="CardList-recommended">
                {CoffeData.coffees.slice(0,4).map((coffee,index) =>(
                <Card key ={index} prop={coffee}/>
                ))}
                </div>
            </div>

        </section>
    )
};

export default Product;