import React from "react";
import "./Decaf.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";
import { useState } from "react";

const Decaf = () => {
    const [sort, setSort]= useState();

    const handleChange=(event)=>{
        setSort(event.target.value)
    }
    return(<section className="DarkRoast-section">
        <div className="DarkRoast-div">
        <h5 className="info-tag">Home</h5>
        <img alt="arrow" className="arrow-right" src={arrow}></img>
        <h5 className="DarkRoast-Tag">Decaf</h5>
        </div>
        <header>
            <h1 className="DarkRoast-header-name">Decaf</h1>
            <div>
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
        <p>Decaf is short for decaffeinated coffee. It's coffee from coffee beans that have had at least 97% of their caffeine removed. There are many ways to remove caffeine from coffee beans. ... Caffeine can also be removed using carbon dioxide or a charcoal filter — a method known as the Swiss Water Process.</p>
        <CardList sorted={sort} name="Decaf"/>    
    </section>)
};

export default Decaf;