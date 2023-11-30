import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Badge,
  Avatar,
  CardBody,
  Collapse,
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import logos from '../../assets/logos.svg';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useContext,useState } from "react";
import { UserContext } from "../../../UserContext";
// import { Outlet, Link, useLoaderData,} from "react-router-dom";
import { useEffect } from "react";
import fetching from "../../../fetchURL";




export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const {userInfo,setUserInfo} = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  

 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
    fetch(`${fetching}/api/profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const username = userInfo?.username;
  const badge = username;

  console.log(userInfo);
  console.log(UserContext);
  console.log(username);
  // const badge = capitalizeFirstLetter(userInfo.useremail);

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/aboutus" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/lost" className="flex items-center">
          Lost 
        </Link>
      </Typography> 
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/found" className="flex items-center">
          Found
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/items" className="flex items-center">
          Items
        </Link>
      </Typography>
    </ul>
  );
    

  function logout() {
    fetch('http://localhost:4000/api/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  

  // const {setUserInfo,userInfo} = useContext(UserContext);
  // const [loading, setLoading] = useState(false);
  // React.useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  // try {
  //   console.log('1')
  //     // setLoading(true);
  //     const response = await axios.get('http://localhost:4000/profile', {
  //       withCredentials: true,
  //     });

  //     // Assuming the response.data contains the user information
  //     console.log(response.data);
  //     setUserInfo(response.data);
  //   }
  //   catch (error) {
  //     console.error('Error fetching user profile:', error);
  //     // Handle error as needed
  //   }
  // };
  // function logout() {
  //   axios.post('http://localhost:4000/logout', null, {
  //     withCredentials: true, // Include credentials in the request
  //   })
  //     .then(() => {
  //       // setUserInfo(null);
  //     })
  //     .catch((error) => {
  //       console.error('Error during logout:', error);
  //       // Handle error as needed
  //     });
  // }
  // const username = userInfo?.username;


  return (
    <>
      <Navbar className="sticky top-0 z-30 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to='/' >
          <Typography
            as="a"
            className="mr-4 cursor-pointer  font-medium"
          >
            <img src={logos} alt="Logo" className="h-8 w-25 shadow" />
           
          </Typography>
           </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
            {/* <Link onClick={logout} >
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Logout</span>
              </Button>
              </Link> */}
              {username && (
              <>
              <Popover placement="bottom-end">
                <PopoverHandler >
                  <Button>{badge}</Button>
                </PopoverHandler>
                <PopoverContent className="w-72 text-center z-40" >
                  <List className="p-0">
                    <Link to={`/profile/${userInfo.id}`} className="text-initial font-medium text-blue-gray-500" >
                      <ListItem>
                          Profile
                      </ListItem>
                    </Link>
                    <Link to="/" className="text-initial font-medium text-blue-gray-500" onClick={logout}>
                      <ListItem>
                          Logout
                      </ListItem>
                    </Link>
                  </List>
                </PopoverContent>
              </Popover>
              </>
            )}
              {!username && (
              <>
                <Link to='/login' >
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              </Link>
              <Link to='/signup' >
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
              </Link>
              </>
            )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {/* <Link onClick={logout}>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Logout ({username})</span>
            </Button>
            </Link> */}
            {username && (
              <>
              </>
            )}
            {!username && (
              <>
                <Link to='/login' >
                <Button fullWidth variant="text" size="sm" className="">
                  <span>Log In</span>
                </Button>
                </Link>
                <Link to='/signup' >
                <Button fullWidth variant="gradient" size="sm" className="">
                  <span>Sign UP</span>
                </Button>
                </Link>
              </>
            )}
            
          </div>
        </MobileNav>
      </Navbar>
      {/* <div id="detail">
            <Outlet />
      </div> */}
    </>
  )};
