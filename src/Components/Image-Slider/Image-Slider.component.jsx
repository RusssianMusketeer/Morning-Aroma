import React,{useState,useEffect} from 'react';
import { useTransition, animated, config } from 'react-spring/web';
import image0 from "../../Assets/Image_0.jpg";
import image1 from "../../Assets/Image_1.jpg";
import image2 from "../../Assets/Image_2.jpg";
import image3 from "../../Assets/Image_3.jpg";
import image4 from "../../Assets/Image_4.jpg";
import "./Image-Slider.styles.scss";

const Images =[
  {id:0, url: image0},
  {id:1, url: image1},
  {id:2, url: image2},
  {id:3, url: image3},
  {id:4, url: image4}
];

const ImageSlider = ({images, ...props}) => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(Images[index],item =>item.id,{
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      key: Images[index].id,
      config: config.molasses,
    });

    //useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 5), 3000), [])
  
  
      return( transitions.map(({key,item,props})=>(
        <animated.div
        key={key}
        style ={{...props,position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundSize: 'cover',backgroundPosition:"center",willChange:"opacity", backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5)),url(${item.url})`}} />
        
        )))
}

export default ImageSlider;