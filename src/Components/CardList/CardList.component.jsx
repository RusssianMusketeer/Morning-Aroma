import react from "react";
import CoffeData from "../../Data/products";
import Card from "../Card/Card.component";
import "./CardList.styles.scss";

 const CardList = () => {
     return(
    <div className="CardList">
        
        {CoffeData.coffees.map((coffee,index) =>(
            <Card key ={index} prop={coffee}/>
        ))}
    </div>)
}

export default CardList;