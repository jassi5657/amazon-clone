import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../slider.css"
// import { earringData } from './Data/data';
// import { Divider } from '@mui/material';
// import { NavLink } from "react-router-dom"
// import { products } from './ProductData';
import axios from "axios"
import { useNavigate } from 'react-router-dom';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const MenSlider = ({product} ) => {

const [products,setProducts] = useState([])
const navigate= useNavigate();


useEffect(()=>{
    axios.get('http://localhost:5454/product')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err) )
},[])



const handleNavigate=()=>{
    navigate(`/shoes/shoes/nike`)
  }


// ethe main MenSlider set krda peya c 
  return (
    <div className='products_section'>
      <div className="products_deal">
      <h3 className='title' style={{fontWeight:"bolder", fontSize:"22px"}}>You might also like</h3>

        {/* <button className='view_btn'>View All</button> */}
      </div>

      {/* <Divider /> */}

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        // centerMode={true}
        // autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass=''
        containerClass='carousel-container' >
          {
            products.slice(20,30).map((e) => {
              return (


                
                <div className="products_items">
                  <div className="product_img">
                    <img src={e.imageUrl} alt="productItem" onClick={handleNavigate}/>
                  </div>
                </div>
            )
          })
        }




      </Carousel>
    </div>
  )
}

export default MenSlider