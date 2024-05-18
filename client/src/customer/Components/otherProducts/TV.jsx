import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const TV = () => {
    return (
        <Conatiner>
            <Heading>Get the perfect screen size | TVs Starting ₹6,999</Heading>
            <Images>
                <Image>
                    <Link to="/tv/tv/32inch">
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB570558331_.jpg" alt="" />
                    <h6>Budget TVs | Up to 60% off</h6>
                    </Link>
                        
                </Image>

                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_20.5x._SY116_CB570558331_.jpg" alt="" />
                    <h6>4K TVs | Up to 24 months No Cost EMI</h6>
                </Image>

                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_30.5x._SY116_CB570558331_.jpg" alt="" />
                    <h6>Big Screens | Free installation</h6>
                </Image>
                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG23/Suma/MSO/Dec/DesktopQC/Christmas/2x_Desktop_Quad_card_w_title_-_Card_40.5x._SY116_CB570558331_.jpg" alt="" />
                    <h6>Ultra Premium TVs | Up to 50% off</h6>
                </Image>



            </Images>
            <Button>See all offers</Button>

        </Conatiner>
    )
}

const Conatiner = styled.div`
    background-color: white;
    width: 24%;
    height: 440px;
    
    color: black;
    margin-left: -18px;

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
gap: 1.7rem;

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

export default TV