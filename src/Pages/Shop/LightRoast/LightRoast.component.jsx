import React from "react";
import "./LightRoast.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";

const LightRoast = () => {
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Light Roast</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Light Roast</h1>
        </header>
        <p>“Light roast coffee” refers to a coffee roasting style that produces light brown coffee beans with a matte surface. This roast style is used to retain the unique characteristics of the coffee bean. Unlike dark or medium roast coffees, the “roasty” flavor is subtle and similar to a toasted grain.</p>
        <CardList name="Light Roast"/>    
    </section>)
};

export default LightRoast;