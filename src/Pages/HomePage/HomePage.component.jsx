import React from 'react';
import ImageSlider from '../../Components/Image-Slider/Image-Slider.component';
import NavBar from '../../Components/NavBar/NavBar.component';
import HomePageTitle from '../../Components/HomePage-Title/HomePage-Title.component';
import coffeeImage from "../../Assets/Title-coffee-image.jpg";
import "./HomePage.styles.scss";
import { ReactComponent as TextDivider } from '../../Assets/text-divider.svg';
import Footer from '../../Components/Footer/Footer.component';
import { useEffect, useState } from 'react';



const HomePage = () =>{
    const [click, setClick] = useState();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [click]);
    
    return (
        <div className="HomePage-container">
        
        <ImageSlider/>
        <NavBar/>
        <HomePageTitle/>
        <section  className="HomePage-Information-Section">
            <div>
                <div  className="HomePage-extra-Image">
                <img alt="coffe" src={coffeeImage}></img>
                </div>
                <div className="HomePage-Information-text" >
                    <h1>Welcome</h1>
                    <TextDivider style={{width:"400px"}}/>
                    <p>Morning Aroma is dedicated to providing the best coffee and the best shopping experience. With numerous accolades, we continue to source some of the finest coffee roasters to ensure we provide a memorable experience. </p>
                </div>

            </div>
        </section>
        
        <Footer prop={setClick}/>
        
        </div>
    )
}

export default HomePage;
