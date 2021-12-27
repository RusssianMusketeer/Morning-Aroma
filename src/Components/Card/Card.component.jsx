import image from "../../Assets/Coffe-Bag.png";
import "./Card.styles.scss";
import { Link } from "react-router-dom";
import image2 from "../../Assets/Coffee_green.png";
import image3 from "../../Assets/Coffee_red.png";

const Card =({prop})=> {
    let  type  = prop.categorie;
    let ImageCard;

    if (type==="Dark Roast") {
        ImageCard = <img alt="coffe" style={{width:"260px"}} src={image2}></img>;
      } else if (type==="Light Roast") {
        ImageCard = <img alt="coffe" style={{width:"260px"}} src={image3}></img>;
      } else {
        ImageCard = <img alt="coffe" style={{width:"260px"}} src={image}></img>;  
      }
    return(
    <div className="Card">
        
        <Link style={{textDecoration:"none"}} to={`/shop/${prop.name.replace(/ /g, '-')}`} state={{prop}}> 
        {ImageCard}
        <div className="Product-info">
        <h4>{prop.name}</h4>
        <p>${prop.price}</p>
        </div>
        </Link> 
    </div>)
}

export default Card;