import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";
import "./Carousel.css"

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();
  const item = homeCarouselData.map((item) => 
    <img className='slider' 
role='presentation' src={item.Image} />)

   return (

    <div className="-m-1">

      <AliceCarousel
           items={item}
           disableDotsControls
           autoPlay
           autoPlayInterval={4000}
           infinite
           mouseTracking
           controlsStrategy="alternate"
         
           
       />

    </div>
   )
   
};
export default HomeCarousel;





