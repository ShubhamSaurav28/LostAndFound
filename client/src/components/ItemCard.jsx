import { Typography } from '@material-tailwind/react';
import { format } from 'date-fns/esm'
import React from 'react'
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import fetching from '../../fetchURL';

export default function ItemCard({useremail,
  itemname,
  catagory,
  description,
  lof,
  cover,
  createdAt,
  by,
  _id,}) {
    var coloring = "";
    if(lof=="lost"){
      coloring = "red";
    }
    else{
      coloring = "green";
    }



  return (
    <>
      <div className="relative w-[22rem] h-[25rem] flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border m-4">
        <div className="relative mx-4 -mt-6 overflow-hidden text-white  rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
          className='object-cover object-center'
            src={`${fetching}/`+cover}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="mt-2 p-6 h-[10rem]">
          <Typography variant='h5' color={coloring} className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal capitalize ">
            {itemname}
          </Typography>
          <h6>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</h6>
          <h6>by {by.username}</h6>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit truncate">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0 ">
          <Link to={`/client/post/${_id}`} >
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}
