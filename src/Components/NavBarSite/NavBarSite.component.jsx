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
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { logOut } from '../../Redux/userRedux';
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react';


const NavBarSite = () => {
    
    const {play, stop, checked, setChecked} =useContext(MusicContext);
    const quantity = useSelector(state=>state.cart.quantity);
    const user = useSelector(state=>state.user.currentUser);
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);

    const handleLogout = async () => {
        try{

            const order = await axios.get("https://morning-aroma.herokuapp.com/api/auth/logout");
            dispatch(logOut());
            console.log(order)
        }
        catch(err){
            console.log(err)
        }
    };

   
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
                        {user === null ? null : <Link className="Navbar-Links-Site" onClick={handleLogout} to="/">
                                LOG OUT
                            </Link>
                            }
                        </li>
                        
                        <li>
                            {user === null ? <Link className="Navbar-Links-Site" to="/login">
                                SIGN IN
                            </Link> : <Link className="Navbar-Links-Site" to="/account">
                                ACCOUNT
                            </Link>
                            }
                        </li>
                        <li>
                            <Hamburger  toggled={isOpen} toggle={setOpen} />
                        </li>
                        <div className='hamburger-section' style={isOpen? {top:(user != null ? "30px" :"0px")}: {top: "-295px"}}>
                        <div className="hamburger-container" >
                            <Link  className="hamburger" to='/'> HOME </Link>
                            <Link   className="hamburger" to='/shop'> SHOP </Link>
                            <Link   className="hamburger" to='/about'> ABOUT </Link>
                            {user === null ? null : <Link   className="hamburger" onClick={handleLogout} to='/'> LOG OUT </Link>}
                            {user === null ? <Link   className="hamburger" to='/login'> SIGN IN </Link>
                            :<Link   className="hamburger" to='/account'> ACCOUNT </Link> }
             
                        </div>
                        </div>  
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