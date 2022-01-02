import React from 'react';
import "./NavBar.styles.scss";
import { useState,useEffect} from 'react';
import MusicContext from '../../Context/musicContext';
import { Link } from 'react-router-dom';
import {ReactComponent as Cart} from "../../Assets/Cart.svg";
import {ReactComponent as Logo} from "../../Assets/Morning Aroma.svg";
import Toggle from 'react-toggle'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';


const NavBar = () => {

    const {play, stop, checked, setChecked} =useContext(MusicContext);
    const [scroll, setScroll] = useState(false);
    const quantity = useSelector(state=>state.cart.quantity);
    
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 60);
        });
      }, []);  
    return (
        <nav className="HomePage-NavBar" style={scroll ? {backgroundColor:"#282828", padding: "7px 30px"} : {backgroundColor:"transparent"} }>
            <div className="NavBar-Container">
                <div>
                              <Link className="Navbar-Title" to ="/"><Logo style={{width: "150px"}}/></Link>
               </div>
                <div >
                    <ul>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/shop">
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/login">
                                SIGN IN
                            </Link>
                        </li>

                        <li>
                         
                        <Toggle 
                        defaultChecked={checked}
                        checked={checked===true ? true : false}
                        onChange={checked=== true ? ()=>{setChecked(!checked); stop()} :()=>{setChecked(!checked); play() }}
                        >
                        </Toggle>

                        </li>
                        <li>
                        <Link to="/shop/Cart" >
                        <Badge badgeContent={quantity} color="success">
                        <Cart className="Cart-Logo"/>
                        </Badge>
                        </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )

};

export default NavBar;