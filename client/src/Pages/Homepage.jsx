import React, { useEffect, useState } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import MixCard from "../customer/Components/otherProducts/MixCard";
import { useSelector } from "react-redux";
import MainCard from "../customer/Components/otherProducts/MainCard";
import HomeProductWithoutButton from "../customer/Components/Home/HomeProductWithoutButton";
import FooterProduct from "../customer/Components/Home/FooterProduct";
import { footerData } from "../Data/footerData";
import { shoes } from "../Data/shoes/shoes";
import { Link, useNavigate } from "react-router-dom";
import { phone } from "../Data/Phone/phone";
import Slider from "../customer/Components/Slider";
import axios from "axios";
import TodayDeal from "../customer/Components/Home/TodayDeal";
import ShoeSlider from "../customer/Components/Home/ShoeSlider";
import MenSlider from "../customer/Components/Home/MenSlider";


const Homepage = ({product}) => {

  const [products,setProducts] = useState([])


useEffect(()=>{
    axios.get('http://localhost:5454/product')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err) )
},[])



  return (
    <div className=" " style={{backgroundColor:"#E3E6E6"}}>
      <HomeCarousel images={homeCarouselData} />
<div style={{marginTop:"-320px", position:"relative", marginLeft:"20px"}}>

        <MainCard />
</div>
<br />
<br />
<br />

      <div className="space-y-10 py-20">


<Slider/>

      <HomeProductSection data={mens_kurta} section={"Today's Deals"} />
      {/* <TodayDeal /> */}
      
        {/* <HomeProductWithoutButton data={mensShoesPage1} section={"You might also like"} /> */}
        <MenSlider />

        <MixCard/>
        <br />
        <br />
        <br />

      
        <HomeProductWithoutButton data={sareePage1} section={"Gift ideas inspired by your shopping history"} />



        <HomeProductWithoutButton data={phone} section={"Related to items you've viewed"} />
        

        {/* <HomeProductWithoutButton  data={shoes} section={"Gift ideas inspired by your shopping history"} /> */}
        <ShoeSlider/>

        
        

        



        
        <FooterProduct data={footerData} section={"Inspired by your browsing history"}/>
        <br />
        <br />

      </div>

      
    </div>
  );
};

export default Homepage;
