import React, { useState } from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import { getUser } from "../../../Redux/Auth/Action";
import styled from "styled-components";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const {cart}=useSelector(store=>store);


  const [openAuthModal, setOpenAuthModal] = useState(false);

  const {auth} = useSelector(store=>store)

  const handleClose = () => {
    setOpenAuthModal(false);
  }


  console.log("cart ",cart)

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt]);


  
  useEffect(()=>{
    if(jwt){

      dispatch(getUser(jwt))
    }
    
  },[jwt,auth.jwt])

  useEffect(() =>{
    if(auth.user){
      handleClose()
    }

    // if(location.pathname==="/login" || location.pathname === "/register")
    // navigate(-1)

  },[auth.user])

  return (
    <div >
      {auth.user? (
        <div style={{ marginTop: "50px" }}>
          {cart.cartItems.length > 0? (
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
              <div className="lg:col-span-2 lg:px-5 bg-white">
                <div className=" space-y-3">
                  {cart.cartItems.map((item) => (
                    <>
                      <CartItem item={item} showButton={true} />
                    </>
                  ))}
                </div>
              </div>
              <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
                <div className="border p-5 bg-white shadow-lg rounded-md">
                  <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                  <hr />
  
                  <div className="space-y-3 font-semibold">
                    <div className="flex justify-between pt-3 text-black ">
                      <span>Price ({cart.cart?.totalItem} item)</span>
                      <span>₹{cart.cart.totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span className="text-green-700">-₹{cart.cart?.discounte}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Charges</span>
                      <span className="text-green-700">Free</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount</span>
                      <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
                    </div>
                  </div>
  
                  <Button
                    onClick={() => navigate("/checkout?step=2")}
                    variant="contained"
                    type="submit"
                    sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                  >
                    Check Out
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{fontSize:"27px", 
              width:"70%",
              backgroundColor:"white",
              marginLeft:"50px",
              height:"350px",
              marginTop:"70px",
              marginBottom:"30px",
              border:"1px solid lightgray"
             }}>
              <p style={{marginLeft:"20px",
               marginTop:"50px",
               fontWeight:"600",
               marginLeft:"390px"
               }}>Your Amazon Cart is empty.</p>
              
              <img style={{
                width:"300px",
                height:"200px",
                marginTop:"-80px",
                marginLeft:"20px"
              }} src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
              {/* <p style={{fontSize:"20px", fontWeight:"18px",marginLeft:"30px"}}>Please Add Some Items to Access cart</p> */}
            <Link to="/">
            <p style={{fontSize:"16px",
              marginLeft:"397px",
              marginTop:"-110px",
              color:"rgb(0,131,156)"

            }}>Shop today’s deals</p>
            </Link>
            </div>
          )}
        </div>
      ) : (
        
<Container>
  <br />


  <Col>
<img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
<div className="content">

<h1>Your Amazon Cart is empty</h1>
<p>Shop today’s deals</p>

<Link to="/login">
<button style={{marginLeft:"-2px"}}>Sign in to account</button>
</Link>

<Link to="/signup">
<button style={{backgroundColor:"white", border:"1px solid lightgray"}}>Signup up now</button>
</Link>
</div>

  
  </Col>
  
      
      
</Container>
      )}
    </div>
  );
 

  
};


const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgb(227,230,230);
  /* margin-top: 40px;
  margin-left: 20px; */
`;

const Col = styled.div`
background-color: #fff;
margin-left: 20px;

display: flex;
width: 70%;
height: 250px;

img{
  width:"304px";
  height: 174px;
  margin-left: 30px;
  margin-top: 30px;
}


.content{
  width: 500px;
  margin-left: 30px;
  margin-top: 50px;
  cursor: pointer;


  h1{
    font-size: 22px;
    font-weight: 600;
  }

  p{
    font-size: 15px;
    color: rgb(0,113,133);
  }
}


button{
  width: 140px;
  height: 35px;
  border-radius: 8px;
  text-align: center;
  /* margin-left: -5px; */
  margin: 10px;
  background-color: rgb(255,216,20);
}
`;

export default Cart;

