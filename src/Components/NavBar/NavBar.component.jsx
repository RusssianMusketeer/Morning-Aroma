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
import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/userRedux';
import { Badge } from '@mui/material';
import axios from 'axios';



const NavBar = () => {

    const {play, stop, checked, setChecked} =useContext(MusicContext);
    const [scroll, setScroll] = useState(false);
    const dispatch = useDispatch();
    const quantity = useSelector(state=>state.cart.quantity);
    const user = useSelector(state=>state.user.currentUser);

    const handleLogout = async () => {
        try{

            const order = await axios.get("http://localhost:5000/api/auth/logout");
            dispatch(logOut());
            console.log(order)
        }
        catch(err){
            console.log(err)
        }
    };

    
    
    
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
                        {user === null ? null : <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} onClick={handleLogout} to="/">
                                LOG OUT
                            </Link>
                            }
                        </li>
                        <li>
                            {user === null ? <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/login">
                                SIGN IN
                            </Link> : <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/account">
                                ACCOUNT
                            </Link>
                            }
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