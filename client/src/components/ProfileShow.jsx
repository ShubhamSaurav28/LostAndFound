import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import {Link} from 'react-router-dom';
  import { UserContext } from '../../UserContext';
  import { useContext } from 'react';
  import useravatar from '../assets/useravatar.png';
import fetching from '../../fetchURL';
  
export default function ProfileShow() {
    const {userInfo,setUserInfo} = useContext(UserContext);

    
    React.useEffect(() => {
        fetch(`${fetching}/api/profile`, {
          credentials: 'include',
        }).then(response => {
          response.json().then(userInfo => {
            setUserInfo(userInfo);
          });
        });
      }, []);
      
      const {username,useremail,phoneno} = userInfo;
      console.log(username);
      console.log(phoneno);

  return (
    <>
      <div className='container flex justify-center mx-auto my-5 '>
      <div className="relative w-[30rem] h-[30rem] flex flex-col text-gray-700 bg-white shadow-[0_15px_30px_5px_rgba(0,0,0,0.3)] w-96 rounded-xl bg-clip-border m-4">
        <div className="relative mx-auto h-[16rem] w-[16rem] mt-6 overflow-hidden text-white   rounded-full bg-black bg-clip-border shadow-2xl uppercase">
          <img src={useravatar} alt="avatar" srcset="" />
        </div>
        <div className="mt-2 px-12 py-6 h-[12rem] grid grid-cols-2 justify-between">
            <div>
              <ul className='font-bold p-2'>
                <li>Name :</li>
                <li>Email :</li>
                <li>Phone No:</li>
              </ul>
            </div>
            <div>
              <ul className='p-2'>
                <li>{username}</li>
                <li>{useremail}</li>
                <li>{phoneno}</li>
              </ul>
            </div>
          </div>
        
      </div>
      </div>
    </>
  )
}
