import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HomeStyle = () => {
    return (
        <Conatiner>
            <Heading>Revamp your home in style</Heading>
            <Images>
                <Image>
                <Link to="/homedecoration/home/homeitem">

                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg" alt="" />
                    <h6>Bedsheets, curtains & more</h6>
                    </Link>






                </Image>

                <Image>
                    <Link to="/homedecoration/home/homedeco">

                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg" alt="" />
                    <h6>Home decoration</h6>
                    </Link>



                </Image>

                <Image style={{marginTop:"18px"}}>
                <Link to="/homedecoration/home/homestore">

                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg" alt="" />
                    <h6>Home storage</h6>
                </Link>



                </Image>
                <Image style={{marginTop:"18px"}}>
                
                    <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg" alt="" />
                    <h6>Lighting solutions</h6>

                </Image>



            </Images>
            <Button style={{marginTop:"43px"}}>See all offers</Button>

        </Conatiner>
    )
}

const Conatiner = styled.div`
    background-color: white;
    width: 24%;
    height: 440px;
    
    color: black;
    margin-left: 5px;

`;

const Heading = styled.div`
font-size: 23px;
margin-left: 17px;
font-weight: bold;
margin-top: 10px;

`;
const Images = styled.div`
margin-left: 15px;

margin-top: 27px;
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

export default HomeStyle