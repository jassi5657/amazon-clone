import React from 'react'
import styled from 'styled-components'

const Travel = () => {
    return (
        <Conatiner>
            <Heading>Deals on travel tickets you cannot resist</Heading>
            <Images>
                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img23/AmazonPay/PD23/QC/Flight_186x116._SY116_CB600937888_.jpg" alt="" />
                    <h6>Up to ₹5000 off | Flight tickets</h6>








                </Image>

                <Image>
                <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img23/AmazonPay/PD23/QC/Train_186x116._SY116_CB600937888_.jpg" alt="" />
                    <h6>Zero gateway fees on trains</h6>
                    



                </Image>

                <Image style={{marginTop:"27px"}}>
                
                <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img23/AmazonPay/PD23/QC/Bus_186x116._SY116_CB600937888_.jpg" alt="" />
                    <h6>Bus ticket bookings</h6>
                    



                </Image>
                <Image style={{marginTop:"27px"}}>
                
                <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img23/AmazonPay/Movies/Animal/V2/Accessory_186x116._SY116_CB571827941_.jpg" alt="" />
                    <h6>Products for your travel needs</h6>
                    

                </Image>



            </Images>
            <Button>See all offers</Button>

        </Conatiner>
    )
}

const Conatiner = styled.div`
    background-color: white;
    width: 23.8%;
    height: 440px;
    
    color: black;
    margin-left: 5px;

`;

const Heading = styled.div`
font-size: 22px;
margin-left: 17px;
font-weight: bold;
margin-top: 10px;

`;
const Images = styled.div`
margin-left: 15px;

margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
gap: 1.6rem;

`;
const Image = styled.div`
width: 115px;
/* height: 100px; */
gap: 0.5rem;
margin-top: 7px;


img{
    margin-left: 18px;
    height: 95px;
}


h6{
    font-size: 12px;
    color: gray;
    margin-left: 16px;
}
`;

const Button = styled.div`
    margin-top: 19px;
    margin-left: 17px;
    font-size: 14px;
    color: #278798;
`;

export default Travel