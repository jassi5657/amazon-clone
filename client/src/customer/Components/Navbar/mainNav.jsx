
// import SearchIcon from '@mui/icons-material/Search';
// import { ShoppingBasket } from '@mui/icons-material';
import React ,{ Fragment, useEffect, useState } from 'react'
// import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useLocation } from "react-router-dom";
// import { useStateValue } from "../../../StateProvider";
// import { auth } from "./firebase";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
// import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from './Navigation'
import { deepPurple } from '@mui/material/colors'
import { Button, MenuItem, Menu,  Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import authReducer from '../../../Redux/Auth/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../Redux/Store';
import { getUser, logout } from '../../../Redux/Auth/Action';

import { getCart } from "../../../Redux/Customers/Cart/Action";

import RoomIcon from '@mui/icons-material/Room';



function MainNav() {

  const { cart } = useSelector((store) => store);

    const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null);
  const openUserMenu = Boolean(anchorE1)
  // const jwt = localStorage.getItem("jwt");
  // const {auth} = useSelector(store=>store)

  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store)
  const location = useLocation()

  const dispatch = useDispatch();



const handleUserClick = (event) => {
  setAnchorE1(event.currentTarget);
}

  const handleCloseUserMenu = (event) => {
    setAnchorE1(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  }

  const handleCategoryClick = (category,section,item,close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    // close();
  };



  useEffect(()=>{
    if(jwt){

      dispatch(getUser(jwt))
    }
    
  },[jwt,auth.jwt])

  useEffect(() =>{
    if(auth.user){
      handleClose()
    }

    if(location.pathname==="/login" || location.pathname === "/register")
    navigate(-1)

  },[auth.user])


  const handleLogout = () =>{
    dispatch(logout())
    handleCloseUserMenu()

  }


  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCart(jwt));
    }
  }, [jwt]);


  return (
    
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
<div>
{/* {auth.user?.firstName[0].toUpperCase()} */}
{auth.user? (
          <div className="signIn">
            <p style={{color:"lightgray", marginLeft:"7px"}}> Delivery to {auth.user.firstName}</p>
  <p className='signIn'><RoomIcon style={{height:"20px"}}/>{auth.user?.city.toUpperCase()} {auth.user?.zipCode}</p> 

          </div>
        ) : (
          <div className="signIn">
            <p>Welcome,Sign in</p>
          </div>
        )}

</div>

      <div className="header_search">
        <input className="header_searchInput" type="text" placeholder='Search Amazon.in'/>
        <SearchIcon className="header_searchIcon " 
        />


<div className='ml-24 text-white hover:border'>
  <Link to="/login">
  
  {auth.user? (
    <p>{auth.user?.firstName}</p>
    
  ):(
    <div>
      <p className='/login' style={{fontSize:"12px"}}>Hello, <span style={{fontSize:"11px"}}>User </span></p>
          </div>
  ) }
  </Link>
  <p className='signIn' style={{display:"flex", gap:"0.3rem", fontWeight:"bolder"}}>Accounts <span>&</span> <span>Lists</span> </p>
</div>


    <div className="ml-5 flex items-center">
                <div className="hidden lg:flex lg:flex-1   lg:space-x-6 ">
                 

                  {auth.user?.firstName ? (
                    <div>
                      <Avatar
                        className="text-white hover:border"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-hanspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                        
                      </Avatar>

                      <Menu
                        id="basic-menu"
                        anchorE1={anchorE1}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}

                        style={{marginTop:"-500px",
                        marginLeft:"1280px"
                      
                      
                      }}
                      >

                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>

                        <MenuItem onClick={handleCloseUserMenu}>
                          <Link to="/account/order">My Orders</Link>
                        </MenuItem>

                        <MenuItem onClick={handleLogout}>Logout</MenuItem>

                      </Menu>
                    </div>
                  ) : (

                    <Button
                      onClick={handleOpen}
                      className='text-sm font-medium'
                      style={{color:"white"}}
                    >
                      <Link to="/login">
                      Signin
                      </Link>
                    </Button>
                  )
                  }
                </div>

                

                {/* Cart */}
                    
                    <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    onClick={() => navigate("/cart")}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingCartIcon
                      className="h-6 w-6 flex-shrink-0 text-white group-hover:text-gray-500 border-bold  "
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-800">
                      {cart.cart?.totalItem}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
                    
              </div>

      </div>

      

    </div>

    
    
  );
}

export default MainNav;