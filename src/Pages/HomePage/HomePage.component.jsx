import React from 'react';
import ImageSlider from '../../Components/Image-Slider/Image-Slider.component';
import NavBar from '../../Components/NavBar/NavBar.component';
import HomePageTitle from '../../Components/HomePage-Title/HomePage-Title.component';
import coffeeImage from "../../Assets/Title-coffee-image.jpg";
import "./HomePage.styles.scss";
import { ReactComponent as TextDivider } from '../../Assets/text-divider.svg';
import { ReactComponent as IconCoffee } from '../../Assets/icon-coffee-bean.svg';
import { ReactComponent as IconGift } from '../../Assets/icon-gift.svg';
import { ReactComponent as IconTruck } from '../../Assets/icon-truck.svg';
import {ReactComponent as Logo} from "../../Assets/Morning Aroma.svg";

const HomePage = () =>{
    return (
        <div className="HomePage-container">
        <ImageSlider/>
        <NavBar/>
        <HomePageTitle/>
        <section  className="HomePage-Information-Section">
            <div>
                <div  className="HomePage-extra-Image" style={{backgroundImage:`linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(249,249,249,1) 50%, rgba(255,255,255,1) 100%), url(${coffeeImage})`}}>
                </div>
                <div className="HomePage-Information-text" >
                    <h1>Welcome</h1>
                    <TextDivider style={{width:"400px"}}/>
                    <p>Morning Aroma is dedicated to providing the best coffee and the best shopping experience. With numerous accolades, we continue to source some of the finest coffee roasters to ensure we provide a memorable experience. </p>
                </div>

            </div>
        </section>
        <section className="Why-choose-us-section">
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
        <section className="Chose-us-cards-section" >
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
        
        </div>
    )
}

export default HomePage;
