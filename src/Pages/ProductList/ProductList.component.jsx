import "./ProductList.styles.scss";
import NavBarSite from '../../Components/NavBarSite/NavBarSite.component';
import 'react-awesome-slider/dist/styles.css';
import { Outlet,Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from '../../Components/Footer/Footer.component';
import { useState, useEffect } from "react";



const ProductList = () => {
    const path = useLocation().pathname;
    const location = useLocation();
    const [click, setClick] = useState();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [location]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [click]);
    
    
    return(
        <section>
           
        <NavBarSite />
        <div className="Shop-Menu">
            <ul>
                <Link className="first-row-item" style={{textDecoration:"none" }}to="/shop"><li  style={{fontWeight: (path=== "/shop") ? '800' : "500"}}>HOME</li></Link>
                <Link className="first-row-item"style={{textDecoration:"none"}} to="Dark_Roast"><li  style={{fontWeight: (path=== "/shop/Dark_Roast") ? '800' : "500"}}>DARK ROAST</li> </Link>
                <Link className="first-row-item"style={{textDecoration:"none"}}to="Light_Roast"><li  style={{fontWeight: (path=== "/shop/Light_Roast") ? '800' : "500"}}>LIGHT ROAST</li></Link>
                <Link className="second-row-item" style={{textDecoration:"none"}}to="Espresso"><li  className="second-row-item"style={{fontWeight: (path=== "/shop/Espresso") ? '800' : "500"}}>ESPRESSO</li></Link>
                <Link className="second-row-item" style={{textDecoration:"none"}}to="Decaf"><li className="second-row-item" style={{fontWeight: (path=== "/shop/Decaf") ? '800' : "500"}}>DECAF</li></Link>
            </ul>
            
        </div>
        <Outlet/>
        <Footer prop={setClick}/>
        </section>
    ) 
};

export default ProductList;