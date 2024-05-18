import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ProductCard2 = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();

  const randomValue = Math.floor(Math.random() * 10000)
  

  const handleNavigate=()=>{
    navigate(`/product/${product?._id}`)
  }

  return (
    
    <Container onClick={handleNavigate}>
      <Col1>
<Image>
  <img src={imageUrl} alt="" />
</Image>
      </Col1>

      <Col2>
    <h1>{title}</h1>
    <Star>

    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
    <StarIcon/>
    <StarHalfIcon/>
    <KeyboardArrowDownIcon className="down"/>
    <p className='rand'>{randomValue}</p>
    </Star>
    <p>1K+ bought in past month</p>

    <p className='deal'>Limited time deal </p>

    <Price>
      <h1 className='discount'><span>₹</span> {discountedPrice} </h1>
      <h1 className='price'> M.R.P: <span> ₹{price} </span></h1>
      <p>({discountPersent}% off)</p>

    </Price>

    <Delivery>
      <p>FREE delivery <span>Wednesday</span></p>
      <p className='fast'>Or fastest delivery <span>Tomorrow</span> </p>
    </Delivery>

    <Button>
      <button>Add to cart</button>
    </Button>
      </Col2>
    </Container>

  );
};

const Container = styled.div`
display: inline-flex;
width: 900px;
height: 302px;
border: 1px solid lightgray;
margin: 10px;

`;

const Col1 = styled.div`
/* border: 1px solid lightgray; */
width: 250px;
height: 300px;
/* margin: 20px; */
background-color: rgb(247,247,247);
margin-left: 1px;

`;


const Image = styled.div`

width: 200px;
position: absolute;

img{
  /* position: absolute; */
  margin-left: 20px;
  margin-top: 25px;
  width: 200px;
  height: 218px;
  
}

`;

const Col2 = styled.div`
width: 65%;
margin-left: 20px;
margin-top: -14px;
h1{
  margin-top: 25px;
  /* width: 900px; */
        overflow:hidden; 
        white-space:nowrap; 
        text-overflow: ellipsis;
}


.deal{
  width: 130px;
  text-align: center;
  align-items: center;
  font-size: 14px;
  height: 27px;
  color: white;
  font-weight:600 ;
  background-color: rgb(204,12,57);
  margin-top: 7px;


}
`;



const Star = styled.div`
color: rgb(255,164,28);


.down{
  color: black;
  font-size: 18px;

}

.rand{
  color: black;
  margin-top: -22px;
  margin-left: 140px;
  
}
`;


const Price = styled.div`
margin-top: -20px;
.discount{
  font-weight: 600;
  font-size: 27px;
}

.price{
  margin-top: -27px;
  margin-left: 98px;
  font-size: 14px;
  
  span{
    text-decoration: line-through;

  }
}


p{
  margin-top: -25px;
  margin-left: 190px;
}
`;


const Delivery = styled.div`
margin-top: 6px;

span{
  font-weight: 600;
}


.fast{
  font-size: 15px;
}

`;


const Button = styled.div`
margin-top: 15px;
  button{
    background-color: rgb(255,216,20);
    width: 100px;
    height: 35px;
    font-size: 14px;
    text-align: center;
    border-radius: 50px;
    font-weight: 400;
  }
`;

export default ProductCard2;
