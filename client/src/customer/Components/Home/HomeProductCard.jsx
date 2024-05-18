import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer flex flex-col items-center bg-red rounded-lg shadow-lg overflow-hidden w-[14rem] mx-3"
    >
      <div className="h-[12rem] w-[10rem] " >
        <Image>

          <img
            className=" object-cover object-top "
            src={product?.image || product?.imageUrl}
            alt={product?.title}
          />
        </Image>

      </div>
      <Button>
        <button>{product?.button}</button>
        <p>{product?.offer}</p>
      </Button>
      <Title>

        <div className="p-2" style={{ fontSize: "13px" }}>
          <p className="mt-2  text-black -ml-1">{product?.title}</p>
        </div>
      </Title>
    </div>
  );
};

const Image = styled.div`


img{

}
`;


const Button = styled.div`
margin-top: -10px;

button{
  background-color: rgb(204,12,57);
  border-radius: 3px;
  color: white;
  width: 110px;
  height: 25px;
  font-size: 13px;
  margin-left: -10px;
  margin-top: 40px;
}


p{
  color: rgb(204,12,57);
  font-weight: 500;
  font-size: 12px;
  margin-left: 120px;
  margin-top: -22px;


}
`;


const Title = styled.div`
p{
  width: 200px;
  height: 20px;
  text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
margin-left: -3px;
}
`;


export default HomeProductCard;
