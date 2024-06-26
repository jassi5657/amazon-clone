import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../../Redux/Auth/Action";
// import axios from "../axios";
// import { useStateValue } from "../StateProvider";
function Login() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  
  },[jwt])
  
  useEffect(() => {
    if (auth.user) {
      navigate('/', { replace: true }); // redirect to home page
    }
  }, [auth.user]);
 
 
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const userData={
      email: data.get("email"),
      password: data.get("password"),
     
    }
    console.log("login user",userData);
  
    dispatch(login(userData));

  };
  return (
    <div style={{backgroundColor:"white"}}>
    <Container>
      <Logo>
        <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
      </Logo>

      <FormContainer onSubmit={handleSubmit}>
        <h3>Sign-In</h3>

        <InputContainer>
          <p>Email</p>
          <input
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="given-name"
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="given-name"
            type="password"
          />
        </InputContainer>

        <LoginButton type="submit" variant="contained">Login</LoginButton>


        <InfoText>
          By continuing, you agree to Amazon's <span>Conditions of Use </span>
          and <span> Privacy Notice</span>
        </InfoText>
      </FormContainer>
      
      <SignUpButton onClick={() => navigate("/signup")}>
        Create Account in Amazon
      </SignUpButton>
    </Container>
    </div>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  background-color: white;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    background-color: white;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const LoginButton = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

const InfoText = styled.p`
  font-size: 12px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;

  span {
    color: #426bc0;
  }
`;

const SignUpButton = styled.button`
  width: 55%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;
  border: 1px solid gray;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;
export default Login;
