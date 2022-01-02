import React from "react";
import "./Cart.styles.scss";
import { useState } from "react";
import image from "../../Assets/Coffe-Bag.png";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { addProduct,modifyProduct,removeProduct } from "../../Redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import imageAroma from "../../Assets/Morning_Aroma.png";
import { useEffect } from "react";
import axios from "axios";

const Key ="pk_test_51JCBsWF4JALlSlqQHwoXpwQPRRwR4EpYNWta4kJkRj6drldJ3SXokPFAH3wPpHw4z74DpUu6UXZeRVEEngLy29wE001bcIl2Da";

const Cart = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const info = useSelector(state=>state.cart.products);
    console.log(info)
    const total = useSelector(state=>state.cart.total);
    const dispatch = useDispatch();
   
    const handleChange=(event)=>{
        const name= event.target.name;
        const value = event.target.value;
        dispatch(modifyProduct({name,value}));
    };

    const handleRemove =(value)=>{
        
        dispatch(removeProduct(value));
    }

    const onToken =(token) => {
        setStripeToken(token);
    }

    useEffect(()=>{
    const makeRequest = async () => {
    try{
        const res = await axios.post("http://localhost:5000/api/checkout/payment", {
            tokenId:stripeToken.id,
            amount: total*100
        })
        console.log(res.data)
    }
    catch(err){
        console.log(err)
    }
    };
    stripeToken && makeRequest();
    },[stripeToken])
    return (<section>
        <div className="section_header_title">
            <h1>Your Cart</h1>
        </div>
        {info.length===0 ? null :<div className="cart_rows">
            <div className="cart_rows_names">
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>

            </div>

        </div>}
        {info.length===0 ? <p className="empty_cart">Your cart is currently empty, please add products to see them in the cart.</p> :
        info.map((item,index)=>(<div className="cart_row" >
            <div className={index===0 ? "cart_row_content" : "cart_row_content_second" }>
                <div className="cart_row_content_image_info">
                <img alt="coffe" style={{width:"200px",marginRight:"1.5rem"}} src={item.photo}></img>
                <div>
                    <Link to ={`/shop/${item.name.replace(/ /g, '-')}`} style={{textDecoration:"none"}}state={{
                        prop:{
                    categorie:item.categorie,
                    quantity:item.quantity,
                    photo: item.photo,
                    bean:item.bean,
                    name:item.name,
                    description:item.description,
                    price:item.price,
                    total:item.total
                        }
                }}>
                    <h3>{item.name}</h3>
                    </Link>
                    <h4>Grind Setting: {item.bean}</h4>
                    <span  className="remove_span" onClick={()=>handleRemove(index)} >Remove</span>
                </div>
                </div>
                <div className="cart_row_content_price_input">
                    <span>${item.price}</span>
                    <input type="number" name={index} onChange={handleChange} value={item.quantity} min="1"></input>
                    <span>${(item.price*item.quantity).toFixed(2)}</span>

                </div>

            </div>
        </div>))}
        {info.length===0 ? <div className="empty_cart_div"><button className="continue_shopping_empty"><Link to ="/shop">Continue Shopping</Link></button></div>
         :<div className="cart_checkout_total">
            <div>
                <span className="total">Total</span>
                <span className="total_price">${(total.toFixed(2))}</span>
            </div>
            <div className="buttons_shopping">

                <button className="continue_shopping"><Link to ="/shop">Continue Shopping</Link></button>
                <StripeCheckout  currency="USD" description={`Your total is $${total}`} stripeKey={Key} token={onToken} name="Morning Aroma" image={imageAroma} amount={total*100} billingAddress shippingAddress>
                <button className="checkout">Checkout</button>
                </StripeCheckout>
            </div>

        </div>}
    
    </section>)
};

export default Cart;