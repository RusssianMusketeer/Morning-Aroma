import React from 'react';
import "./NavBar.styles.scss";
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Cart} from "../../Assets/Cart.svg";
import {ReactComponent as Logo} from "../../Assets/Morning Aroma.svg";
import useSound from 'use-sound';
import Toggle from 'react-toggle'

const NavBar = () => {
    
    let audio = new Audio("/Jazz.mp3")
    const [scroll, setScroll] = useState(false);
    const [checked, setChecked] = useState(true);
    const [play,{stop}] = useSound("/Jazz.mp3", {interrupt: true});
    console.log(checked)
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 60);
        });
      }, []);
      useEffect(() => {
        play();
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
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/sign-in">
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
                        <Link to="/cart" >
                        <Cart className="Cart-Logo"/>
                        </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )

};

export default NavBar;