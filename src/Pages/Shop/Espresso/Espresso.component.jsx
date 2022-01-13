import React from "react";

import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";
import { useState } from "react";

const Espresso = () => {
    const [sort, setSort]= useState();

    const handleChange=(event)=>{
        setSort(event.target.value)
    }
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Espresso</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Espresso</h1>
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
        <p>Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees.</p>
        <CardList sorted={sort} name="Espresso"/>    
    </section>)
};

export default Espresso;