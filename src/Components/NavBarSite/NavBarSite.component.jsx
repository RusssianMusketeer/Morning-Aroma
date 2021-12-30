import React from 'react';
import "./NavBarSite.styles.scss";
import { Link } from 'react-router-dom';
import {ReactComponent as Cart} from "../../Assets/Cart.svg";
import {ReactComponent as Logo} from "../../Assets/Morning Aroma.svg";
import Toggle from 'react-toggle'
import MusicContext from '../../Context/musicContext';
import { useContext } from 'react';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';


const NavBarSite = () => {
    
    const {play, stop, checked, setChecked} =useContext(MusicContext);
    const quantity = useSelector(state=>state.cart.quantity);

   
    return (
        <nav className="HomePage-NavBar-Site" >
            <div className="NavBar-Container-Site">
                <div>
                <Link className="Navbar-Title-Site" to ="/"><Logo style={{width: "150px"}}/></Link>
               </div>
                <div >
                    <ul>
                        <li>
                            <Link className="Navbar-Links-Site" to="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link className="Navbar-Links-Site" to="/shop">
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link className="Navbar-Links-Site"  to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link className="Navbar-Links-Site"  to="/sign-in">
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
                        <Cart className="Cart-Logo-Site"/>
                        </Badge>
                        </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )

};

export default NavBarSite;