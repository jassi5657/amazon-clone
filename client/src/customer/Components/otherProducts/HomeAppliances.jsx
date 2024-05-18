import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

const HomeAppliances = () => {
    return (
        <Conatiner>
            <Heading>Appliances for your home | Up to 55% off</Heading>
            <Images>
            <Link  to="/kitchen/kitchen/home">
                <Image>
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                    <h6>Air conditioners</h6>
                </Image>

        </Link >

                <Image>
                    <Link to="all/ghar/refrigerators">
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                    <h6>Refrigerators</h6>
                    </Link>
                </Image>

                <Image style={{marginTop:"40px"}}>
                    <Link to="all/ghar/microOven">

                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                    <h6>Microwaves</h6>
                    </Link>
                </Image>
                <Image style={{marginTop:"40px"}}>
                    <Link to="all/ghar/washing">
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                    <h6>Washing machines</h6>
                    </Link>
                    

                </Image>



            </Images>
            <Button style={{marginTop:"40px"}}>See all offers</Button>

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

export default HomeAppliances