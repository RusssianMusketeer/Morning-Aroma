import react from "react";
import CardList from "../../../Components/CardList/CardList.component";
import image1 from "../../../Assets/Carousel_1.jpg";
import image2 from "../../../Assets/Carouse_2.jpg";
import image3 from "../../../Assets/Carousel_3.jpg";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import "./ShopHomePage.styles.scss";
import { Outlet } from "react-router-dom";

const ShopHomePage = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
return (
    <section>
    <Outlet/>
<div className="Carousel-Wrapper">
        <AutoplaySlider
        play={true}
        interval={3000}
        style={{height:"400px"}}
        bullets={false}
        organicArrows={false}
        startup={false}
        className="Carousel"
        
    >
    <div data-src={image1} />
    <div data-src={image2} />
    <div data-src={image3} />
    </AutoplaySlider>
      </div>
      <h2 className="popular">Popular selection</h2>
    <CardList/>

    </section>)
};

export default ShopHomePage;