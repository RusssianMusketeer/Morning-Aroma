import react from 'react';
import "./ProductList.styles.scss";
import NavBarSite from '../../Components/NavBarSite/NavBarSite.component';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import CardList from '../../Components/CardList/CardList.component';
import NavBar from '../../Components/NavBar/NavBar.component';
import image1 from "../../Assets/Carousel_1.jpg";
import image2 from "../../Assets/Carouse_2.jpg";
import image3 from "../../Assets/Carousel_3.jpg";


const ProductList = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return(
        <section>
        <NavBarSite />
        <div className="Shop-Menu">
            <ul>
                <li>HOME</li>
                <li>RETAIL COFFEE</li>
                <li>ESPRESSO</li>
                <li>DECAF & HALF-CAF</li>
                <li>FILTER COFFEE</li>
            </ul>
        </div>
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
        </section>
    ) 
};

export default ProductList;