import image from "../../Assets/Coffe-Bag.png";
import "./Card.styles.scss";
import { Link } from "react-router-dom";


const Card =({prop})=> {

    return(
    <div className="Card">
        
        <Link style={{textDecoration:"none"}} to={`/shop/${prop.name.replace(/ /g, '-')}`} state={{prop}}
            >
        
        <img alt="coffe" style={{width:"260px"}} src={image}></img>
        
        <div className="Product-info">
        <h4>{prop.name}</h4>
        <p>${prop.price}</p>
        </div>
        </Link> 
    </div>)
}

export default Card;