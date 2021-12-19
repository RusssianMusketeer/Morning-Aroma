import React from "react";
import "./Espresso.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";

const Espresso = () => {
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Espresso</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Espresso</h1>
        </header>
        <p>Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees.</p>
        <CardList/>    
    </section>)
};

export default Espresso;