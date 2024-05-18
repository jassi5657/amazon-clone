
import React from 'react'
import styled from 'styled-components'
import "./otherproduct.css"
import { Link } from 'react-router-dom'


const Other3 = () => {
  return (
    <Container>
        <Title>Continue shopping for</Title>

        <Image>
            <Link to="/laptop/other/hp">
<img src="https://m.media-amazon.com/images/I/41T6PFpBDSL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />            
            </Link>


        </Image>
        
 
    <Description>HP Victus Gaming Laptop, AMD Ryzen 5 <br /> 5600H, 4GB RTX 3050 GPU, 15.6-inch (39.6 cm) FHD IPS 144Hz, 8GB DDR4, 512GB SSD, Backlit KB, 9ms</Description>

        <Rate>
            <h1>₹ 55,990 <span>M.R.P:</span><span style={{textDecoration:"line-through"}}>₹1,999.00</span></h1>
        </Rate>

        <SmallImg>
              <img className='border' src="https://m.media-amazon.com/images/I/41E5K6g5JaL._SS40_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/41pkCQ2hHpL._SS40_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/41mh3b4mVnL._SS40_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/41CzRZNWz6L._SS40_.jpg" alt="" />



        </SmallImg>



    </Container>
  )
}


const Container = styled.div`
    width: 24%;
    height: 100%;
    /* border: 1px solid gray; */
    background-color: white;
margin-left: 20px;
    
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: bolder;
    margin-left: 20px;
    margin-top: 20px;

    
`;

const Image = styled.div`
width: 40%;
    height: 59%;
    margin-left: 83px;  
    margin-top: 10px;
    img{
        height: 164px;
    }
    
`;

const Description = styled.div`
margin-top: 6px;
    font-size: 16px;
    margin-left: 6px;
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`;

const Rate = styled.div`
margin-top: 5px;
margin-left: 6px;

span{
    margin-left: 5px;
    color: gray;

}
    
`;


const SmallImg = styled.div`
    margin-left: 6px;

width: 20%;
    border-radius: 5px;
    display: inline-flex;
    margin-left: 17px;
    margin-top: 6px;
    gap: 1.5rem;

    .border{
        border: 3px solid rgb(0,113,133);
        border-radius: 10px;
    }
    
`;
export default Other3
