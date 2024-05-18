import React from 'react'
import styled from 'styled-components'
import FooterProduct from '../Home/FooterProduct';
import { footerData } from '../../../Data/footerData';
import HomeCardWithoutButton from '../Home/HomeCardWithoutButton';
import { mens_kurta } from '../../../Data/Men/men_kurta';
import HomeProductSection from '../Home/HomeProductSection';
import HomeProductWithoutButton from '../Home/HomeProductWithoutButton';
import { sareePage1 } from '../../../Data/Saree/page1';
import FooterSmallProduct from '../Home/FooterSmallProduct';

const MobileFeatures = () => {
  return (
<Container>
<FooterProduct data={footerData} section={"Inspired by your browsing history"}/>



<br />
<br />

<hr />

<br />
<br />



{/* <FooterSmallProduct data={sareePage1} section={"Gift ideas inspired by your shopping history"} /> */}

</Container>    
  )
}

const Container = styled.div`

`;

export default MobileFeatures