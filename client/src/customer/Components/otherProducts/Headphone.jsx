import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Headphone = () => {
    return (
        <Conatiner>
            <Heading>Up to 75% off | Headphones</Heading>
            <Link to="/headphone/headphone/boat">

            <Images>
                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                    <h6>boAt Up to 75% off</h6>


                </Image>

                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                    <h6>boult Up to 75% off</h6>


                </Image>

                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                    <h6>Noise Up to 75% off</h6>


                </Image>
                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                    <h6>Zebronics Up to 75% off</h6>


                </Image>



            </Images>
                </Link>
            <Button>See all offers</Button>

        </Conatiner>
    )
}

const Conatiner = styled.div`
    background-color: white;
    width: 24.5%;
    height: 440px;
    
    color: black;
    margin-left: 5px;

`;

const Heading = styled.div`
font-size: 22px;
margin-left: 17px;
margin-top: 10px;

font-weight: bold;
`;
const Images = styled.div`
margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
gap: 1.3rem;

`;
const Image = styled.div`

width: 115px;
/* height: 100px; */
gap: 0.5rem;
margin-top: 30px;
margin-left: 15px;


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

export default Headphone