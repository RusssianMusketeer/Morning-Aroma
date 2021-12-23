import React from "react";
import "./Decaf.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";

const Decaf = () => {
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Decaf</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Decaf</h1>
        </header>
        <p>Decaf is short for decaffeinated coffee. It's coffee from coffee beans that have had at least 97% of their caffeine removed. There are many ways to remove caffeine from coffee beans. ... Caffeine can also be removed using carbon dioxide or a charcoal filter — a method known as the Swiss Water Process.</p>
        <CardList name="Decaf"/>    
    </section>)
};

export default Decaf;