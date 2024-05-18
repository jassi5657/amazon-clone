import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const KitchenCard = () => {
  return (
    
    <Conatiner >
        <Heading>Starting ₹89 | Amazon Brands & more</Heading>
        <Images>
        <Image>
            <Link to="/kitchen/kitchenTools/tools">

            <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_4._SY116_CB571434851_.jpg" alt="" />
            <h6>Starting ₹89 | Kitchen tools</h6>
            </Link>


        </Image>

        <Image>
<Link to="/kitchen/kitchenTools/kitchenContainers">
            <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_1._SY116_CB571434851_.jpg" alt="" />
            <h6>Starting ₹279 | Storage Container</h6>
</Link>


        </Image>

            <Image>
<Link to="/kitchen/kitchenTools/CookWare">
            <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_3._SY116_CB571434851_.jpg" alt="" />
            <h6>Minimum 40%off | Cookware</h6>
</Link>


            </Image>
            <Image>


<Link to="">
            <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_2._SY116_CB571434851_.jpg" alt="" />
            <h6>Up to 60%off  | Racks & holders</h6>
</Link>
            

            </Image>
            


            </Images>
            <Button>See more</Button>
        
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
margin-top: 10px;
font-weight: bold;
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

export default KitchenCard