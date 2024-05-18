import React, { useEffect, useState } from 'react'
import Navigation from '../Navbar/Navigation'
import styled from 'styled-components'
import fullfill from "./fullfil.png"
import returnImg from "./return.png"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import offerImg  from "./offer.png"
import { CiLocationOn } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";
import FooterProduct from '../Home/FooterProduct'
import { footerData } from '../../../Data/footerData'
import MobileFeatures from './MobileFeatures'
import { mensShoesPage1 } from '../../../Data/shoes'
import { getAllReviews } from '../../../Redux/Customers/Review/Action'
import { findProductById } from '../../../Redux/Customers/Product/Action'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../../Redux/Customers/Cart/Action'
import tick from "./tick.png"
import thumb from "./thumb.png"

import {Button, RadioGroup } from "@mui/material";
import { featuredData1 } from '../../../Data/mobile/featuredData1'
import RateProduct from '../ReviewProduct/RateProduct'

import ReactImageMagnify from 'react-image-magnify';

import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom
  } from "react-image-magnifiers";



function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const MobileProducts = () => {
    const [selectedSize, setSelectedSize] = useState();
    const [activeImage, setActiveImage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customersProduct,review } = useSelector((store) => store);
    const { productId } = useParams();
    const jwt = localStorage.getItem("jwt");

    const img = customersProduct.product?.imageUrl
    // console.log("param",productId,customersProduct.product)
  
    const handleSetActiveImage = (image) => {
      setActiveImage(image);
    };
  
    const handleSubmit = () => {
      const data = { productId, size: selectedSize.name };
      dispatch(addItemToCart({ data, jwt }));
      navigate("/cart");
    };
  
    useEffect(() => {
      const data = { productId: productId, jwt };
      dispatch(findProductById(data));
      dispatch(getAllReviews(productId));
    }, [productId]);
  return (
    <Container>
<Row>
    <Column>
        <div className="col-1">


        <ReactImageMagnify {...{
    smallImage: {

        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: img
    },

    largeImage: {
        
        src: img,
        width: 1200,
        height: 1800,
        marginLeft:400


    }
}} />


{/* 
<MagnifierContainer>
  <div className="example-class">
    <MagnifierPreview imageSrc={img} />
  </div>
    <MagnifierZoom style={{ height: "400px" }} imageSrc={img}/>
</MagnifierContainer> */}




      

            {/* <img src={customersProduct.product?.imageUrl}  /> */}
        </div>

        {/* <div className="smallCards ">
        {product.images.map((image) => (
                <div
                  onClick={() => handleSetActiveImage(image)}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={customersProduct.product?.imageUrl}
                    alt={product.images[1].alt}
                    className="h-full w-full object-cover object-center"
                  />


                </div>
              ))}
            </div> */}
    </Column>



    <Column>

        <div className="col-2">
            <h1>{customersProduct.product?.title}</h1>
            <p>Visit the Samsung Store</p>
            <i className=''>4.3 </i>
            <div className="star ml-7 -mt-5" style={{display:"flex", color:"orange"}} >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
            <p className='-mt-5 ml-32'>26 ratings | Search this page</p>
            <p style={{fontSize:"13px", color:"black"}}>50+ bought in past month</p>
            <br />
        <hr />

            <Emi>₹2,914 <span>/month (24 months) </span> </Emi>
            <EmiPlans>with <b>EMI</b>  on your SBI Credit Card <span> All EMI Plans </span></EmiPlans>
            <Price>-38% <span>₹{customersProduct.product?.price}</span></Price>
            <MRP>M.R.P.: <span>₹{customersProduct.product?.discountedPrice}</span></MRP>
            <FullFill>
                <img src={fullfill} alt="" />
            </FullFill>
            <Tax>Inclusive of all taxes</Tax>
            <CreditOffer>Get 3% back <span> (Rs.1,789.50) </span> + rewards worth ₹2,000 + 3 months Prime with Amazon Pay ICICI credit card. Apply now.</CreditOffer>
            <br />
            <hr />
            <br />

            <Offer>
                <img src={offerImg} alt="" />
                <h1 className='-mt-6 ml-14' style={{fontSize:"15px"}}>Offers</h1>
                <OfferRow>
                    <OfferCol1>
                        <Col1Head>No Cost EMI</Col1Head>
                        <ColP>Upto ₹2,685.94 EMI interest savings on Amazon Pay ICICI </ColP>
                        <a href="" className='ml-2' style={{fontSize:"13px", color:"rgb(0,113,133)"}}>1 offer </a>
                    </OfferCol1>

                    <OfferCol2>
                        <Col1Head>No Cost EMI</Col1Head>
                        <ColP>Upto ₹2,685.94 EMI interest savings on Amazon Pay ICICI </ColP>
                        <a href="" className='ml-2' style={{fontSize:"13px", color:"rgb(0,113,133)"}}>1 offer </a>
                    </OfferCol2>
                </OfferRow>
                <hr />
            </Offer>

            <ReturnPolicy>
                <img src={returnImg} alt="" />
            </ReturnPolicy>
            <hr />
            <br />

            <Details >

            <Brand>Brand <span>{customersProduct.product?.brand}</span>
            </Brand>
            <Model>Model Name <span style={{marginLeft:"15px"}}>{customersProduct.product?.title}</span>

            </Model>
            <Network>Network <br /> Service <br /> Provider <span>Unlocked for All Carriers</span></Network>
            <Os>Operating System  <span>Android 13.0</span></Os>

            <Cellular>Cellular Technology <span>5G</span></Cellular>
            </Details>
            <br />
            <hr />
<br />

            <About>
                <h3>About this item</h3>
                <ul>
                    <li>CAPTURE THE NIGHT IN LOW LIGHT: Whether you’re headed to a concert or romantic night out, there’s no such thing as bad lighting with Night Mode; Galaxy S23 lets you capture epic content in any setting with stunning Nightography</li>
                    <li>HIGH CAMERA RESOLUTION: Create crystal-clear content worth sharing with the 50MP high-resolution camera of Galaxy S23; Whether you’re posting or printing, Galaxy S23 always does the moment justice</li>
                    <li>FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever</li>
                    <li>UNLOCK SMOOTH GAMING: Game at full throttle and smoothly switch between apps; Get more done with our fastest processor ever combined with massive internal storage; And if you’re on the move, keep going with a screen that adapts to your environment</li>
                    <li>POWER TO KEEP GOING: Whether you’re capturing a memory or catching up with friends, Galaxy S23 will be ready when you need it most; With a 3,900mAh battery*, stay in the moment without worrying about your phone dying</li>
                </ul>
                <a href=""><p> See more product details </p></a>
            </About>
            
        </div>
    </Column>

    <Column>
    <div className="col-3">
        <Price1>
        <p>₹</p>
            <h3>{customersProduct.product?.price} <sup className='sup'>00</sup> </h3>

        </Price1>
        <Image>
            <img src={fullfill} alt="" />
        </Image>
        <Delivery>FREE delivery <span>Thursday, 7 <br /> March.</span> Details</Delivery>
        <DeliveryLocation><CiLocationOn className='mt-4 text-[20px] text-black'/> <span className='ml-7'> Deliver to Jaspreet - Mohali</span> <p> 160055‌ </p></DeliveryLocation>
        <br />
        <br />
        <br />

        <Stock>In stock</Stock>
        <ShipsFrom>Ships from <span>Amazon</span></ShipsFrom>
        <SoldBy>Sold by <span>MarketTopperss</span></SoldBy>
        <Protection>

        <p>Add a Protection Plan:</p>

        <input type="checkbox" /><span>Extended Warranty by</span> <span className='ml-15'> OneAssist for <span style={{color:"rgb(178,34,34)", marginLeft:"1px"}} > ₹2,199.00</span></span>
        <br />
        <input type="checkbox" /><span>Screen Protection Plan  by Acko for <span style={{color:"rgb(178,34,34)", marginLeft:"1px"}} > ₹2,349.00</span></span>
        <br />

        <input type="checkbox" /><span> Total Protection Plan <br />  by  Quess for <span style={{color:"rgb(178,34,34)" ,marginLeft:"1px"}} > ₹2,749.00</span></span>
        </Protection>
        <Quantity>
                <p>Quantity:</p>
            <select name="" id="">
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
            </select>
        </Quantity>

        
                 

        <form className="mt-10" onSubmit={handleSubmit}>
                {/* Sizes */}
                {/* <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10">
                      {customersProduct.product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-1 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </Button>
              </form>
              
        
        <Transaction><FaLock style={{color:"gray"}}/><span> Secure transaction</span></Transaction>

        <WishItem>
            <input type="checkbox" /><span className='ml-2'>Add gift options</span>
        <hr />
        </WishItem>

        <WishList>
            <select>
                <option>Add to wish list <span className='ml-9'>|</span></option>
            </select>
            
        </WishList>

        

    </div>
    
    </Column>


    <Column>
    <br />
        <br />
        <br />
        <br />


        <div className="col-4">
        <OtherImg >
            <img src="https://m.media-amazon.com/images/I/51AjohATwIL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <h1>Samsung Galaxy M14 5G(smoky Teal,4GB,128GB)|50MP Triple ......</h1>
            {/* <p><span></span></p> */}
            <p>₹</p>
            <h3>9,990 <sup className='sup'>00</sup> </h3>
        </OtherImg>
        </div>
    </Column>
</Row>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<Review>
    <div className="topBrand">
    <img src="https://m.media-amazon.com/images/I/11sUgaVRsYL.png" alt="" />
    <h4>{customersProduct.product?.brand}</h4>
    </div>
    <div className="firstList">

    <ul>
        <li><img src={tick} alt="" /> <span>89% positive ratings from 100K+ customers</span></li>
        <li><img src={tick} alt="" /><span>100K+ recent orders from this brand</span></li>
        <li><img src={tick} alt="" /><span></span>10+ years on Amazon</li>
    </ul>
    </div>
<div className="secondList">

    <ul className='list'>
        <h1 className='head'>Highly rated by customers for</h1>
        <br />
        <li style={{marginLeft:"-220px", marginTop:"50px"}}><img src={thumb} alt="" /><span>good battery</span></li>
        <li style={{marginLeft:"10px" ,marginTop:"50px"}}><img src={thumb} alt="" /><span>good camera</span></li>
        <li style={{marginLeft:"10px", marginTop:"50px"}}><img src={thumb} alt="" /><span>fingerprint sensor</span></li>    
    </ul>
</div>
</Review>
<br />
<br />
<br />
<hr />
<br />
<br />
<br />
<br />
<FooterProduct data={featuredData1} section={"Customers frequently viewed"}/>
<br />
<hr />
<br />
<br />
{/* 
<div className="flex flex-wrap justify-center bg-white border py-5 rounded-md ">
                    {customersProduct?.products?.content?.map((item) => (
                      <ProductCard product={item} />
                    ))}
                  </div> */}

<Description>
    <h1>Product description</h1>
    <p>Take the pictures of your life. Do you want to capture and share special moments in their entire fascination? And that's it! With the legendary camera of the new Galaxy S23, you can get the best out of the moment even at night and make impressive photos and videos - including the wow factor! But that's not all. The new Snapdragon processor brings your gaming experience to the next level and conjures up smooth graphics on your display. Your next high score is waiting for you! And thanks to the persistent battery, there are enough power reserves to enjoy your further entertainment program after intensive gaming. As you can see, there is a lot in the new Galaxy S23 for you. Everything you need to make the most of your special moments.</p>
</Description>
<br />
<br />
<hr />
<br />
<br />
<br />
<br />


{/* <RateProduct/> */}


<MobileFeatures/>
    </Container>
  )
}

const Container = styled.div`

background-color: white;
`;
const Row = styled.div`
display: inline-flex;
`;
const Column = styled.div`





.smallCards{
    margin-top: -600px;
    margin-left: 20px;
}

.col-1{
    width: 160%;
    height: 100vh;
    /* background-color: red; */
    margin-top: 60px;
    margin-left: 130px;


    img{
        width: 550px;
        height: 599px;
    }

    
    
}

.col-2{
    width: 40%;
    height: 100vh;
    background-color: white;
    margin-left: 380px;
    margin-top: 50px;

    h1{
        font-size: 25px;
        font-weight: 500;
    }
    p{
        color: rgb(0,113,133);
    }
}

.col-3{
    margin: 15px;
    padding: 15px;
    border: 1px solid lightgray;
    margin-top: 55px;
    color: rgb(0,113,133);
    margin-left:-120px ;
    /* margin-right:100px; */
    border-radius: 8px;

}

.col-4{
    width: 270px;
    border: 1px solid lightgray;
    margin-top: 690px;
    color: rgb(0,113,133);
    margin-left:-280px ;
    border-radius: 8px;
}


`;


const Emi = styled.div`
margin-top: 10px;
font-size: 23px;
font-weight: bold;

span{
    font-weight: 300;
    font-size: 18px;
    color: rgb(15,17,17);
}
`;
const EmiPlans = styled.div`

span{
    color: rgb(0,113,133);
    font-weight: 400;
}
`;
const Price = styled.div`
color: rgb(204,12,57);
span{
    font-size: 20px;
    font-weight: 500;
    color: black;


}
`;
const MRP = styled.div`
font-size: 13px;

span{
    text-decoration: line-through;
}
`;
const FullFill = styled.div`
width: 100px;
margin-top: 5px;
`;

const Tax = styled.div`
    font-size: 15px;
`;
const CreditOffer = styled.div`
    color: rgb(0,113,133);

span{
color: rgb(204,12,57);

}
`;
const Offer = styled.div`
img{
    width: 30px;
}
`;
const OfferRow = styled.div`
display: flex;
margin: 20px;
margin-left: -3px;
`;
const OfferCol1 = styled.div`
border: 1px solid lightgray;
width: 200px;
height: 120px;
border-radius: 5px;


`;

const Col1Head = styled.div`
font-size: 15px;
font-weight: bold;
margin-left: 8px;
`;

const ColP = styled.div`
    color: black;
    font-size: 14px;
margin-left: 8px;

`;


const OfferCol2 = styled.div`


border: 1px solid lightgray;
width: 200px;
height: 120px;
margin-left: 30px;
border-radius: 5px;

`;
const ReturnPolicy = styled.div`
height: 100px;
margin-top: -1px;

img{
    height: 80px;
}

`;


const Details = styled.div`
        font-weight: bold;
    
    span{
        
        font-weight: 400;
        justify-content: baseline;
        margin-left: 70px;
    }
    
`;

const About = styled.div`
h3{
    font-weight: bold;
}

ul{
    list-style-type: disc;
    font-size: 13px;
}

li{
    margin: 5px;
}
`;




const Brand = styled.div``;
const Model = styled.div``;
const Network = styled.div``;
const Os = styled.div``;
const Cellular = styled.div``;


const Price1 = styled.div`
p{
    margin-left: 10px;
    font-size: 14px;
    color: black;
}
h3{
    margin-left: 20px;
    margin-top: -26px;

    font-weight: 500;
    /* position: absolute; */
    font-size: 26px;
    color: black;
    sup{
        font-size: 13px;
        /* margin-top: -10px; */
        margin-left: -5px;
    }
}
`;

const Image = styled.div`
img{
    width: 100px;
}
`;
const Delivery = styled.div`
    color: rgb(0,113,133);
    font-weight: 600;
span{
    color: black;
}
`;
const DeliveryLocation = styled.div`
position: absolute;
    font-size: 14px;
    

    span{
        margin-top: -20px;
        position: absolute;
        /* background-color: red; */
        width: 190px;
    }

    p{
        margin-left: 25px;
        margin-top: 3px;
    }

    

`;
const Stock = styled.div`
color: green;
font-size: 20px;
`;
const ShipsFrom = styled.div`
color: black;
font-size: 14px;
span{
    margin-left: 30px;
    font-size: 13px;
}

`;
const SoldBy = styled.div`
color: black;
font-size: 14px;
span{
    margin-left: 50px;
    color: rgb(0,113,133);
    font-size: 13px;


}

`;
const Protection = styled.div`
margin-top: 10px;
width:230px;

p{
    color: black;
    font-weight: 600;
    font-size: 16px;
}

span{
    margin-left: 10px;
    margin-left: 10px;
}

`;
const Quantity = styled.div`
margin-top: 5px;
select{
    margin-left: 70px;
    margin-top: -23px;
    position: absolute;
    border: 1px solid lightgray;
    border-radius: 5px;
}
`;

const Transaction = styled.div`
margin-top: 10px;
span{
    margin-left: 22px;
    margin-top: -19px;
    position: absolute;
}
`;
const WishItem = styled.div`
margin-top: 10px;

hr{
    margin-top: 10px;
    /* color: black; */
}
`;
const WishList = styled.div`
    border: 1px solid;
margin-top: 10px;
border-radius: 5px;

    
`;
const OtherImg = styled.div`

img{
    margin-top: 15px;
    margin-left: 80px;
    /* margin: 0 auto; */
    width: 110px;
    height: 150px;
    margin-bottom: 10px;
}

h1{
    margin-left: 7px;
    color: black;
    font-weight: 600;
}
p{
    margin-left: 10px;
    font-size: 12px;
    color: rgb(177,39,4);
}
h3{
    margin-left: 20px;
    margin-top: -26px;

    font-weight: 600;
    /* position: absolute; */
    font-size: 25px;
    color: rgb(177,39,4);
    sup{
        font-size: 13px;
        /* margin-top: -10px; */
        margin-left: -5px;
    }
}
`;

const Review = styled.div`

.topBrand{
    display: flex;
    img{
        height: 30px;
        /* width: 50px; */
        margin-left: 30px;
    }

    h4{
        font-weight: 600;
        font-size: 17px;
        margin-left: 6px;
    }

}

.firstList{
    border-right:  1px solid lightgray ;
    width: 450px;

ul{
    /* display: inline; */
    margin-left: 20px;
    
}

li{
    display: flex;
    margin: 10px;
    img{
        height: 20px;
    }
    span{
        margin-left: 10px;

    }
}
}


.secondList{
    margin-left:500px ;
    margin-top: -110px; 
.list{
    display: flex;

    h1{
        font-weight: 500;
    }
}

li{
    display: flex;
    gap: 0.4rem;
    width: 130px;
    height: 30px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
    background-color: rgb(243,243,243);
font-size: 13px;
justify-content: baseline;
    img{
        height: 15px;
        margin-top: 4px;
    }
}
   
}
`;

const Description = styled.div`
h1{
    margin-left: 30px;
    font-weight: 600;
}
p{
    width: 90%;
    margin-left: 65px;
    font-size: 14px;
    margin-top: 10px;
    color: gray;
}
`;

export default MobileProducts