import StripeCheckout from 'react-stripe-checkout';
import { DivContainer,ButtonPay } from './pay.styles'
import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = "pk_test_51JCBsWF4JALlSlqQHwoXpwQPRRwR4EpYNWta4kJkRj6drldJ3SXokPFAH3wPpHw4z74DpUu6UXZeRVEEngLy29wE001bcIl2Da";


const Pay = () =>{
    const [stripe,setStripe]=useState< IState["stripestate"] | null>(null);
    const onToken = (token) =>{
        setStripe(token);
    }

useEffect (()=>{
    const makeRequest = async () =>{
        try {
            const res = await axios.post("https://morning-aroma.herokuapp.com/api/checkout/payment",
            {
               tokenId: stripe?.id,
               amount:2000,
            }
            );
            console.log(res.data);
        }catch(err){
          console.log(err);  
        }
    }
    stripe && makeRequest();
},[stripe]);
    return(
        <DivContainer>
            <StripeCheckout 
            name="Coffe Shop" 
            image="https://ithlia.files.wordpress.com/2014/06/cup-of-coffee-avatar.jpg?w=280"
            billingAddress
            shippingAddress
            description = "your toal is 20 $"
            amount = {2000}
            token={onToken}
            stripeKey={KEY} 
            >
            <ButtonPay>Pay Now</ButtonPay>
            </StripeCheckout>
        </DivContainer>
    )
}

export default Pay;