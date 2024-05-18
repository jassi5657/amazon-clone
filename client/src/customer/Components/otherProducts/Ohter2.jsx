
import React from 'react'
import styled from 'styled-components'
import "./otherproduct.css"


const Other2 = () => {
  return (
    <Container>
        <Title>Continue shopping for</Title>

        <Image>
<img src="https://m.media-amazon.com/images/I/71BGGO03fOL._AC_SY175_.jpg" alt="" />            


        </Image>
        
 
    <Description>Prestige Omega Deluxe Non-Stick Cookware 3 <br /> Pc Set | PFOA Free 5-Layer Coating | Omni Tawa 25 cm</Description>

        <Rate>
            <h1>₹ 1,27,990 <span>M.R.P:</span><span style={{textDecoration:"line-through"}}>₹1,999.00</span></h1>
        </Rate>

        <SmallImg>
              <img className='border' src="https://m.media-amazon.com/images/I/71BGGO03fOL._AC_SY55_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/51bR9gWZ3-L._AC_SY55_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/616KgzKCyOS._AC_SY55_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/81QP3C+rTbL._AC_SY55_.jpg" alt="" />



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
        height: 155px;
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
export default Other2
