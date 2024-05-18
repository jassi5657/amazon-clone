import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import FooterProduct from "./FooterProduct";
import { footerData } from "../../../Data/footerData";

const FooterSmallCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer overflow-hidden w-[12rem] h-[18rem]"
    >

      <Image>

        <img
          className=""
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </Image>

      

    </Container>
    


  );
};
const Container = styled.div`
border: 1px solid;
height: 130px;
width: 140px;
`;

const Image = styled.div`
/* width: 100px; */
height: 100px;
background-color: rebeccapurple;


img{
    width: 140px;
    height: 100px;
    margin-left: 30px;
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




export default FooterSmallCard;
