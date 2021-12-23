import react from "react";
import CoffeData from "../../Data/products";
import Card from "../Card/Card.component";
import "./CardList.styles.scss";

 const CardList = ({name}) => {
     console.log(name)
     return(
    <div className="CardList">
        
        {CoffeData.coffees.filter(coffe=>{
            return (coffe.categorie === name);
        }).map((coffee,index) =>(
            <Card key ={index} prop={coffee}/>
        ))}
    </div>)
}

export default CardList;