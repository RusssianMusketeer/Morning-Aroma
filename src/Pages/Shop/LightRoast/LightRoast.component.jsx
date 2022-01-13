import React from "react";
import "./LightRoast.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";
import { useState } from "react";

const LightRoast = () => {
    const [sort, setSort]= useState();

    const handleChange=(event)=>{
        setSort(event.target.value)
    }
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Light Roast</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Light Roast</h1>
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
        <p>“Light roast coffee” refers to a coffee roasting style that produces light brown coffee beans with a matte surface. This roast style is used to retain the unique characteristics of the coffee bean. Unlike dark or medium roast coffees, the “roasty” flavor is subtle and similar to a toasted grain.</p>
        <CardList sorted={sort} name="Light Roast"/>    
    </section>)
};

export default LightRoast;