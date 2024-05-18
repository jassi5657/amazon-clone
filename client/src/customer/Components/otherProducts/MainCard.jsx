import React from 'react'
import "./otherproduct.css"
import KitchenCard from './KitchenCard'
import Headphone from './Headphone'
import Men from './Men'
import TV from './TV'
import HomeAppliances from './HomeAppliances'
import HomeStyle from './HomeStyle'
import Travel from './Travel'
import styled from 'styled-components'



const MainCard = () => {
  return (
    <div className='mixcard1'>
        <KitchenCard />
        <Headphone />
        <Men />
        <br />
        <Container>
        <Heading>Get 50% off on <br /> Selling fee</Heading>

        <Images>
        <Image>
          <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/amazonservices/landing/atf-2p-18-SEP-50._CB576926068_.jpg" alt="" />
        </Image>
            <Button style={{marginTop:"5px"}}>Become a Seller</Button>
        <Image2 style={{marginTop:"-10px"}}>
        <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0cb78e0c-3833-4b99-830b-192f8b5195e5.jpg" className="ads" />
        
        </Image2>
            </Images>

            <Image>

            </Image>

        </Container>
        
        <TV/>
        <HomeAppliances/>
        <HomeStyle/>
        <Travel/>


    </div>
  )
}

const Container = styled.div`
    background-color: white;
    width: 24%;
    height: 120px; 
    color: black;
    margin-left: -9px;
`;

const Heading = styled.div`
font-size: 20px;
margin-left: 17px;
font-weight: bold;
margin-top: 10px;
`;
const Images = styled.div`
margin-top: 4px;
    display: flex; 
     flex-wrap: wrap; 
gap: 1.3rem;


`;
const Image = styled.div`
width: 115px;
gap: 0.5rem;


img{
    margin-left: 182px;
    margin-top: -48px;

    height: 95px;
}


h6{
    font-size: 12px;
    color: gray;
    margin-left: 16px;
}
`;

const Image2 = styled.div`
  img{
    width:100%;
    margin-top:8px;
    height:300px;
  }
`;

const Button = styled.div`
    margin-top: 19px;
    margin-left: -115px;
    font-size: 14px;
    color: #278798;
`;



export default MainCard