import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import {useDispatch, useSelector} from "react-redux"
import { store } from "../../../Redux/Store";
import { getUser, register } from "../../../Redux/Auth/Action";

// import axios from "../axios";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const {auth} = useSelector(store=>store)



  useEffect(()=>{
    if(jwt){

      dispatch(getUser(jwt))
    }
    
  },[jwt,auth.jwt])

  


    const handleSubmit=(event)=>{
        event.preventDefault()

        const data = new FormData(event.currentTarget);
        const userData = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password"),
            city:data.get("city"),
            zipCode:data.get("zipCode"),

        }
dispatch(register(userData))
        console.log("userData", userData);

    }

  return (
    <div style={{backgroundColor:"white"}}>
    <Container>
      <Logo>
        <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
      </Logo>
      <FormContainer onSubmit={handleSubmit}>
        {/* <h3>Sign-Up</h3> */}
        <InputContainer>
        <p>First Name</p>
        
          <input
          
            required
            id="firstName"
            name="firstName"
            lable="First Name"
            autoComplete="given-name"
          />
        </InputContainer>


        <InputContainer>
        <p>Last Name</p>
          
          <input
            required
            id="lastName"
            name="lastName"
            lable="Last Name"
            autoComplete="given-name"
          />
        </InputContainer>


        <InputContainer>
        <p>Email</p>

          <input
          type="email"
            required
            id="email"
            name="email"
            lable="Email"
            autoComplete="email"
          />
        </InputContainer>

        <InputContainer>
        <p>Password</p>
          
          <input
            required
            id="password"
            name="password"
            lable="Password"
            autoComplete="password"
          />
        </InputContainer>
        <InputContainer>
        <p>City</p>
          
          <input
            required
            id="city"
            name="city"
            lable="City"
            autoComplete="city"
          />
        </InputContainer>

        <InputContainer>
        <p>Pin Code</p>
          
          <input
            required
            id="zipCode"
            name="zipCode"
            lable="Pincode"
            autoComplete="zipCode"
            maxLength={6}
            max={6}
            min={6}

          />
        <SignUpButton type="submit" variant="contained">Create Account in Amazon</SignUpButton>
        </InputContainer>
       
      

      </FormContainer>

      <LoginButton onClick={() => navigate("/login")}>
        Back to Login
      </LoginButton>

      
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
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

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

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;
  border: 1px solid gray;


  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

const LoginButton = styled.button`
  width: 55%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default SignUp;
