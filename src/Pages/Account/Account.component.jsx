import "./Account.styles.scss";
import NavBarSite from '../../Components/NavBarSite/NavBarSite.component';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from '../../Components/Footer/Footer.component';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
var qs = require('qs');


const Account = () => {
    const path = useLocation().pathname;
    const [orderHistory, setOrderHistory] = useState();
    let user = useSelector(state=>{
        if(state.user.currentUser===null){
            return "";}
        return state.user.currentUser
        })
    let products = useSelector(state=>state.cart.products);
    console.log(user,"hello")
    const [click, setClick] = useState();
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [click]);

      useEffect(()=>{
        const getOrders = async () => {
            
        try{
            const orders = await axios.get("https://morning-aroma.herokuapp.com/api/auth/history", {
                params:
                {username: user},
                paramsSerializer: params => {
                    return qs.stringify(params)
                  }
            })

             setOrderHistory(orders);

        }
        catch(err){
            console.log(err)
        }
        };
         getOrders();
        },[user,products])

        
    return(
        
        <section>
           
        <NavBarSite />
        <div className="Shop-Menu">
            <ul>
                <Link className="first-row-item" style={{textDecoration:"none" }}to="/shop"><li style={{fontWeight: (path=== "/shop") ? '800' : "500"}}>HOME</li></Link>
                <Link className="first-row-item" style={{textDecoration:"none"}} to="/shop/Dark_Roast"><li style={{fontWeight: (path=== "/shop/Dark_Roast") ? '800' : "500"}}>DARK ROAST</li> </Link>
                <Link className="first-row-item" style={{textDecoration:"none"}}to="/shop/Light_Roast"><li style={{fontWeight: (path=== "/shop/Light_Roast") ? '800' : "500"}}>LIGHT ROAST</li></Link>
                <Link className="second-row-item"  style={{textDecoration:"none"}}to="/shop/Espresso"><li className="second-row-item" style={{fontWeight: (path=== "/shop/Espresso") ? '800' : "500"}}>ESPRESSO</li></Link>
                <Link className="second-row-item"  style={{textDecoration:"none"}}to="/shop/Decaf"><li className="second-row-item" style={{fontWeight: (path=== "/shop/Decaf") ? '800' : "500"}}>DECAF</li></Link>
            </ul>
            
        </div>
        <section className="account-section">
            
            <h1>My Account</h1>
            <h4>Account Information</h4>
            
            {orderHistory ===undefined ? null : <p>Username: {orderHistory.data.username}</p>}
            {orderHistory ===undefined ? null : <p>Email: {orderHistory.data.email}</p>}
            <div>
            <h4>Order History</h4>
            {orderHistory ===undefined ?<p>You haven't placed any orders yet.</p> : null}
            {orderHistory ===undefined ? null : <p>Welcome {user} !</p>}
            </div>
            {orderHistory ===undefined ? null : orderHistory.data.orders.reverse().map((order,index)=>(order.orders.info.map((element)=>{
                return(<div className="element-name-div" style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}>
                    <div>
                    <img alt="coffe" style={{width:"230px",marginRight:"1.5rem"}} src={element.photo}></img>
                    </div>
                    
                    <div>
                        <h3 className="element-name">{element.name}</h3>
                        <h4 className="element-info">Grind setting: {element.bean}</h4>
                        <h4 className="element-info">Categorie: {element.categorie}</h4>
                        
                    </div>
                    </div>
                    <div className="element-info-div">
                    <h4 className="element-info-numbers-1">Price: ${element.price}</h4>
                        <h4 className="element-info-numbers" >Quantity: {element.quantity}</h4>
                        <h4 className="element-info-numbers">Total: ${element.total.toFixed(2)}</h4>
                        
                    </div>
                    
                </div>)
            }

                
                )))}
            

        </section>
    
        <Footer prop={setClick}/>
        </section>
    ) 
};

export default Account;