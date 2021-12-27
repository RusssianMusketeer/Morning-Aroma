import React from 'react';
import NavBarSite from '../../Components/NavBarSite/NavBarSite.component';
import Footer from '../../Components/Footer/Footer.component';
import { useEffect, useState } from 'react';
import { ReactComponent as TextDivider } from '../../Assets/text-divider.svg';
import { ReactComponent as IconCoffee } from '../../Assets/icon-coffee-bean.svg';
import { ReactComponent as IconGift } from '../../Assets/icon-gift.svg';
import { ReactComponent as IconTruck } from '../../Assets/icon-truck.svg';
import {ReactComponent as Logo} from "../../Assets/Morning Aroma.svg";
import {ReactComponent as Arrow} from "../../Assets/arrow-down.svg";
import video from "../../Assets/Coffee-video.mp4";
import "./About.styles.scss";




const About = () =>{
    
    const [click, setClick] = useState();
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [click]);
    

    
    return (
        <div className="About-container">
            <div style={{width:"100%", position:"absolute"}}>
            <div  className="about-us-title">
            <h1>About us</h1>
            <Arrow  style={{width:"50px", fill:"white"}}/>
            </div>
            </div>
            <div className='video-container'>
            <video loop="true" muted="muted" autoplay="autoplay" playsinline>
            <source src={video} type="video/mp4"/>
                </video>
            </div>
        <NavBarSite/>
        <section  className="Why-choose-us-section">
            <div className="Aroma-span">
            <span>A</span>
            <span>R</span>
            <span>O</span>
            <span>M</span>
            <span>A</span>
            </div>
            <div>
            <h1 className="Why-choose-us-title">Why choose us ?</h1>
            </div>
            <div>
            <h5>WE ARE NOT A THIRD-WAVE COFFEE SHOP, WE ARE HAPPY TO SERVE YOU</h5>
            </div>
            <div>
            <TextDivider style={{width:"400px"}}/>
            </div>

        </section>
        <section  className="Chose-us-cards-section" >
            <Logo className="background-logo"/>
            <div className="Choose-us-cards">
            <div className="Choose-us-cards-div">
                <div>
                <IconCoffee style={{width:"60px"}}/>
                </div>
                <h4>Coffee</h4>
                <p>Discover an endless variety of the world's best artisan coffee from each of our roasters.
                We build our menu based on the seasonality of these producing countries, offering a rotating selection of origins that change regularly. Our coffe is of the best quality, keeping it fresh and aromatic is our priority.
                </p>
            </div>
            <div className="Choose-us-cards-div">
                <div>
                <IconGift style={{width:"60px"}}/>
                </div>
                <h4>Benefits</h4>
                <p>Special offers for certain special occasions.Save on your order and get special gifts with them. We try to make each order special and unique with a added bonus of a gift in the form of a gift card or some chocolate. It is the small details such as these that add to the unique nature of these packages. </p>
            </div>
            <div className="Choose-us-cards-div">
                <div>
                <IconTruck style={{width:"60px", height:"60px"}}/>
                </div>
                <h4>Shipping</h4>
                <p>We cover the cost and the coffee is delivered fast. We understand sometimes you want to get an order right away, you see something and you want to already know the taste. We try our best to have it delivered as fast as possible and we cover the shipping expense on certain areas.Where possible a shipping tracking number will be given .Peak freshness: guaranteed.</p>
            </div>
            </div>
        </section>
        
        <Footer prop={setClick}/>
        
        </div>
    )
}

export default About;
