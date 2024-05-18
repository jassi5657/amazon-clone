import styled from 'styled-components';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';


const Footer = () => {
  return (
    <Container>
      <br />
      <br />

      <Heading>
        <h2>Get To Know Us</h2>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press Releases</p>
        <p>Amazon Science</p>
        <br />
        <br />
        <br />
        <br />
      </Heading>

      <Heading>
        <h2>Connect With Us</h2>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Heading>

      <Heading>
        <h2>Make Money With Us</h2>
        <p>Sell on Amazon</p>
        <p>Sell under Amazon Accelerator</p>
        <p>Protect and Build Your Brand</p>
        <p>Amazon Global Selling</p>
        <p>Become an Affilate</p>
        <p>Fulfilment by Amazon</p>
        <p>Advertise Your Products</p>
        <p>Amazon Pay on Merchants</p>
      </Heading>

      <Heading>
        <h2>Let Us Help You</h2>
        <p>COVID-19 and Amazon</p>
        <p>Your Account</p>
        <p>Return Centre</p>
        <p>100% Purchase Protection</p>
        <p>Amazon App Download</p>
        <p>Help</p>
        <br />
        <br />


      </Heading>
      <br />
<br />
<br />
<br />

      <hr style={{color:"gray"}} />

      <Logo>
        <br />
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        <LanguageBox>
            <h3 className='ml-7 mt-1 font-light ' style={{fontSize:"13px"}}>English</h3>
            <ArrowDropUpIcon style={{marginTop:"-55px" , marginLeft:"79px" , fontSize:"14px"}}></ArrowDropUpIcon>
            <br />
            <ArrowDropDownIcon style={{marginTop:"-89px" , marginLeft:"79px" , fontSize:"14px"}}></ArrowDropDownIcon>
          <LanguageIcon style={{fontSize:"15px" , marginTop:"-145px" , marginLeft:"5px"}}></LanguageIcon>

        </LanguageBox>
              
      </Logo>
      <br />

      <Country>
        <h6>Australia</h6>
        <h6>Brazil</h6>
        <h6>Canada</h6>
        <h6>China</h6>
        <h6>France</h6>
        <h6>Germany</h6>
        <h6>Italy</h6>
        <h6>Japan</h6>
        <h6>Mexico</h6>
        <h6>Netherlands</h6>
        <h6>Poland</h6>
        <h6>Singapore</h6>
        <h6>Spain</h6>
        <h6>Turkey</h6>
        <h6>United Arab Emirates</h6>
      </Country>

      <Country style={{ marginLeft: "41%" }}>
        <h6>United Kingdom</h6>
        <h6>United States</h6>
      </Country>

      <br />


      <Container1>
        <br />
        <Heading1>
          <h2>AbeBooks</h2>
          <p>Books, art</p>
          <p>& collectibles</p>

          <br />

          <h2>Shopbop</h2>
          <p>Designer</p>
          <p>Fashion Brand</p>

        </Heading1>


        <Heading1>
          <h2>Amazon Web Services</h2>
          <p>Scalable Cloud</p>
          <p>Computing Services</p>

          <br />

          <h2>Amazon Business</h2>
          <p>Everything For</p>
          <p>Your Business</p>
        </Heading1>

        <Heading1>
          <h2>Audible</h2>
          <p>Download</p>
          <p>Audio Books</p>

          <br />
          <h2>Prime Now</h2>
          <p>2-Hour Delivery</p>
          <p>on Everyday Items</p>
        </Heading1>

        <Heading1>
          <h2>IMDb</h2>
          <p>Movies, TV</p>
          <p>& Celebrities</p>

          <br />
          <h2>Amazon Prime Music</h2>
          <p>100 million songs, ad-free</p>
          <p>Over 15 million podcast episodes</p>
        </Heading1>

        <br />
        <br />
        <p style={{ marginLeft: "40%" }}> <span style={{ color: "#DDDDDD", fontSize: "13px" }}>Conditions of Use & Sale</span>  <span style={{ color: "#DDDDDD", fontSize: "13px", marginLeft: "12px" }}>Privacy Notice</span> <span style={{ color: "#DDDDDD", fontSize: "13px", marginLeft: "12px" }}>Interest-Based Ads</span></p>
        <p style={{ color: "#DDDDDD", marginLeft: "42%", fontSize: "13px" }}>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        <br />
        <br />

      </Container1>
    </Container>

  );
};

const Container = styled.div`
  background-color: #232F3E;


`;

const Heading = styled.div`
  color: white;
  display: inline-block;
  margin-left: 140px;
  
  h2{
    font-weight: bolder;
  }

  p{
    color: #DDDD;
  }
`;

const Logo = styled.div`

img{
  width: 6%;

  margin-left: 40%;
}
`;

const LanguageBox = styled.div`
  color: #DDDDDD;
  border: 1px solid gray;
  width: 100px;
  height: 35px;
  margin-left: 50%;
  margin-top: -40px;
`;

const Country = styled.div`
display: flex;
gap: 0.8rem;
color: #DDDDDD;
font-weight: lighter;
font-size: 13px;
margin-left: 15%;
`;

const Container1 = styled.div`
    background-color: #131A22;

`;

const Heading1 = styled.div`
  font-weight: lighter;
  font-size: 12px;
  color: white;
  display: inline-block;
  margin: 10px;
  margin-left: 13%;

  p{
    color: gray;
  }
`;


export default Footer;
