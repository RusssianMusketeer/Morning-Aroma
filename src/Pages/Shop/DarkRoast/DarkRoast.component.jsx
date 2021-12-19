import React from "react";
import "./DarkRoast.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";

const DarkRoast = () => {
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Dark Roast</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Dark Roast</h1>
        </header>
        <p>Dark Roast coffees are dark brown, even close to a blackened color. The beans are characterized by drawn-out oil that glosses the surface. Coffee made from a Dark Roast has a robust, full body. The flavors from the coffee's country of origin are almost entirely roasted out, taking on a very bold and smoky taste.</p>
        <CardList/>    
    </section>)
};

export default DarkRoast;