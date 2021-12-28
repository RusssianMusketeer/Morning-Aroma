import React from "react";
import "./Cart.styles.scss";
import { useState } from "react";
import image from "../../Assets/Coffe-Bag.png";
import { useLocation } from "react-router-dom";

const Cart = () => {
    const location= useLocation();
    const information= location.state.product;
    console.log(location.state)
    const [value, setValue] =useState(location.state.quantity);
    const handleChange=(event)=>{
        setValue(event.target.value)
    };
    return (<section>
        <div className="section_header_title">
            <h1>Your Cart</h1>
        </div>
        <div className="cart_rows">
            <div className="cart_rows_names">
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>

            </div>

        </div>
        <div className="cart_row" >
            <div className="cart_row_content">
                <div className="cart_row_content_image_info">
                <img alt="coffe" style={{width:"200px",marginRight:"1.5rem"}} src={location.state.photo}></img>
                <div>
                    <h3>{information.name}</h3>
                    <h4>Grind Setting: {location.state.bean}</h4>
                    <span>Remove</span>
                </div>
                </div>
                <div className="cart_row_content_price_input">
                    <span>${information.price}</span>
                    <input type="number" onChange={handleChange} value={value} min="1"></input>
                    <span>${(information.price*value).toFixed(2)}</span>

                </div>

            </div>
        </div>
        <div className="cart_checkout_total">
            <div>
                <span className="total">Total</span>
                <span className="total_price">${(information.price*value).toFixed(2)}</span>
            </div>
            <div className="buttons_shopping">
                <button className="continue_shopping">Continue Shopping</button>
                <button className="checkout">Checkout</button>
            </div>

        </div>
    
    </section>)
};

export default Cart;