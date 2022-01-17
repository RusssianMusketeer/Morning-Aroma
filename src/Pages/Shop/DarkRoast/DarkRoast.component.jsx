import React from "react";
import "./DarkRoast.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";
import { useState } from "react";

const DarkRoast = () => {
    const [sort, setSort]= useState();

    const handleChange=(event)=>{
        setSort(event.target.value)
    }
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Dark Roast</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Dark Roast</h1>
            <div className="div-flex-sort">
            <label for="Sort-By">Sort by</label>
                <select value={sort}  onChange={handleChange} name="Sort-By-Select" id="select">

                <option value="Featured">Featured</option>
                <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                <option value="Price, high to low">Price, high to low</option>
                <option value="Price, low to high">Price, low to high</option>
                </select>
            </div>
        </header>
        <p>Dark Roast coffees are dark brown, even close to a blackened color. The beans are characterized by drawn-out oil that glosses the surface. Coffee made from a Dark Roast has a robust, full body. The flavors from the coffee's country of origin are almost entirely roasted out, taking on a very bold and smoky taste.</p>
        <CardList sorted={sort} name="Dark Roast"/>    
    </section>)
};

export default DarkRoast;