import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const HomeCardWithoutButton = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Container
      className="cursor-pointer flex flex-col items-center bg-red rounded-lg shadow-lg overflow-hidden w-[14rem] h-[15rem] mx-3"
      
    >
    
        <Image >

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
height: 300px;
`;


const Image = styled.div`
margin-top: 10px;
width: 330px;
/* background-color: red; */
height: 250px;


img{
    width: 183px;
    margin-left: 72px;
    margin-top: 20px;
    height: 200px;
    background-size: contain;
}
`;




export default HomeCardWithoutButton;
