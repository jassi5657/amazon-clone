import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const FooterCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/mobile/apple/iphone_15`)}
      className="cursor-pointer flex flex-col items-center  overflow-hidden w-[14rem] h-[25rem] mx-3"
    >

      <Image>

        <img
          className=""
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </Image>

      <Title>
        <h6>{product?.title}</h6>
      </Title>
      <Star>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
        <span>81,995</span>

      </Star>
      <Viewed>
        <p>{product?.view}</p>
      </Viewed>
      <Price ><h3>{product?.price}</h3></Price>

      <Delivery>
        {/* <p>Get it by <span>Thursday, March 7</span> FREE Delivery by Amazon</p> */}
      </Delivery>
    </Container>
    


  );
};
const Container = styled.div`
`;

const Image = styled.div`
width: 184px;
height: 210px;
/* background-color: rebeccapurple; */


img{
    width: 150px;
    /* height: 100px; */
    margin-left: 20px;
    margin-top: 15px;
    background-size: contain;
}
`;

const Title = styled.div`
margin-top: -30px;
width: 180px;
color: rgb(0,113,133);
h6:hover{
  color: rgb(199,81,31);
}
`;
const Star = styled.div`
display: flex;
/* gap: 0.3rem; */
margin-right: 54px;
margin-top: 4px;
color: rgb(255,164,28);
span{
color: rgb(0,113,133);

}
`;
const Viewed = styled.div`
font-size: 13px;
margin-left: -16px;
`;
const Price = styled.div`
font-size: 20px;
color: rgb(177,39,4);
h3{
  margin-left: -88px;

}

`;
const Delivery = styled.div`
font-size: 14px;
width: 180px;
margin-left: 8px;
span{
  font-weight: 600;
}
`;




export default FooterCard;
