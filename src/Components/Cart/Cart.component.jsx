import React from "react";
import "./Cart.styles.scss";
import { useState } from "react";
import { useSelector } from 'react-redux';
import {modifyProduct,removeProduct,clearProducts } from "../../Redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import imageAroma from "../../Assets/Morning_Aroma.png";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Key ="pk_test_51JCBsWF4JALlSlqQHwoXpwQPRRwR4EpYNWta4kJkRj6drldJ3SXokPFAH3wPpHw4z74DpUu6UXZeRVEEngLy29wE001bcIl2Da";

const Cart = () => {

    const location= useLocation();
    const [stripeToken, setStripeToken] = useState(null);
    const info = useSelector(state=>state.cart.products);
    console.log(info)
    const total1 = useSelector(state=>(state.cart.total));
    let navigate = useNavigate();
    let user = useSelector(state=>{
        if(state.user.currentUser===null){
            return "";}
        return state.user.currentUser
        })
    console.log(user, "user")
    const total =total1;
    const totalCents = +(total*100).toFixed(2);
    console.log(totalCents)
    const dispatch = useDispatch();

   
    const handleChange=(event)=>{
        const name= event.target.name;
        const value = event.target.value;
        dispatch(modifyProduct({name,value}));
    };

    const handleRemove =(value)=>{
        
        dispatch(removeProduct(value));
    }

    const verifyUser =(event)=>{
        console.log("verifyyy");
        
        if(user===""){
        event.stopPropagation()
        navigate("/login")
        }
    }

    const onToken =(token) => {
        
        setStripeToken(token);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [location]);

    useEffect(()=>{
    const makeRequest = async () => {

        
        
    try{
        const res = await axios.post("http://localhost:5000/api/checkout/payment", {
            tokenId:stripeToken.id,
            amount: totalCents,
        }).then( ()=>{
            dispatch(clearProducts());
            
        })
        
        const order = await axios.put("http://localhost:5000/api/auth/order",{
            username: user,
            orders:{
                info,
            amount: total
            }
        })
        navigate("/account");
        
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
                <div className="cart_rows_names_responsive">
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>

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
             <div style={{textAlign:"initial",cursor: "default"}}>
                <p>Test Account</p>
                <p>Card Number: 4242 4242 4242 4242</p>
                <p>MM/YY: 08/24</p>
                <p>CVC: 123</p>
             </div>
             <div>
            <div>
                <span className="total">Total</span>
                <span className="total_price">${(total).toFixed(2)}</span>
            </div>
            <div className="buttons_shopping">

                <button className="continue_shopping"><Link to ="/shop">Continue Shopping</Link></button>
                <StripeCheckout  currency="USD" description={`Your total is $${total}`} stripeKey={Key} token={onToken} name="Morning Aroma" image={imageAroma} amount={totalCents} billingAddress shippingAddress>
                <button onClick={verifyUser}  className="checkout">Checkout</button>
                </StripeCheckout>
            </div>
            </div>
        </div>}
    
    </section>)
};

export default Cart;