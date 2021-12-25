import react from "react";
import CoffeData from "../../Data/products";
import Card from "../Card/Card.component";
import "./CardList.styles.scss";
import { useEffect,useState } from "react";

 const CardList = ({name,sorted}) => {
     const [list,setList]=useState(
        CoffeData.coffees.filter(coffe=>{
            return (coffe.categorie === name);
        }).map((coffee,index) =>(
            <Card key ={index} prop={coffee}/>
        ))
     )
     
     useEffect(()=>{
       
             if(sorted==="Price, high to low"){ 
        return  setList([...list].sort((a, b) => parseFloat(b.props.prop.price) - parseFloat(a.props.prop.price)))
           } else if ( sorted==="Price, low to high") {
            return setList([...list].sort((a, b) => parseFloat(a.props.prop.price) - parseFloat(b.props.prop.price)))
           }else if ( sorted==="Alphabetically, A-Z") {
            return setList([...list].sort((a,b)=>(a.props.prop.name.localeCompare(b.props.prop.name))))
           }else if ( sorted==="Alphabetically, Z-A") {
            return setList([...list].sort((a,b)=>(a.props.prop.name.localeCompare(b.props.prop.name))).reverse())}
            else return setList(CoffeData.coffees.filter(coffe=>{
                return (coffe.categorie === name);
            }).map((coffee,index) =>(
                <Card key ={index} prop={coffee}/>
            )));
       
     },[sorted]);
     
    return(
    <div className="CardList">
        {list}
    </div>)
}

export default CardList;