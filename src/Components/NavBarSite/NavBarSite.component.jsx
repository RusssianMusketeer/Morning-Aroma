import React from 'react';
import "./NavBarSite.styles.scss";
import { Link } from 'react-router-dom';
import {ReactComponent as Cart} from "../../Assets/Cart.svg";
import {ReactComponent as Logo} from "../../Assets/Morning Aroma.svg";

const NavBarSite = () => {
   
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
                        <Link to="/cart" >
                        <Cart className="Cart-Logo-Site"/>
                        </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )

};

export default NavBarSite;