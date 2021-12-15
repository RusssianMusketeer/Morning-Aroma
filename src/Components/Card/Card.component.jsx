import react from "react";
import image from "../../Assets/Coffe-Bag.png";
import "./Card.styles.scss";

const Card =({prop})=> {
    
    console.log(prop)
    return(
    <div className="Card">  
        
        <img alt="coffe" style={{width:"260px"}} src={image}></img>
        
        <div className="Product-info">
        <h4>{prop.name}</h4>
        <p>{prop.price}</p>
        </div>

    </div>)
}

export default Card;