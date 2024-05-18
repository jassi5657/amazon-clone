import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Men = () => {
    return (
        <Conatiner>
            <Heading>Up to 60% off | Styles for men</Heading>
            <Images>
                <Image>
                    <Link to="/men/clothing/tshirtMen">

                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" alt="" />
                    <h6>Clothing</h6>
                    </Link>



                </Image>

                <Image>
                    <Link to="/shoes/shoes/nike">

                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg" alt="" />
                    <h6>Footwear</h6>
                    </Link>



                </Image>

                <Image style={{marginTop:"26px"}}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" alt="" />
                    <h6>Watches</h6>



                </Image>
                <Image style={{marginTop:"26px"}}>
                
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" alt="" />
                    <h6>Bags & Wallets</h6>

                </Image>



            </Images>
            <Button style={{marginTop:"32px"}}>See all offers</Button>

        </Conatiner>
    )
}

const Conatiner = styled.div`
    background-color: white;
    width: 23.7%;
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
margin-left: 15px;
margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
gap: 1.3rem;

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

export default Men