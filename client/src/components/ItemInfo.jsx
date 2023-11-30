import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
  Collapse,
} from "@material-tailwind/react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { format } from 'date-fns/esm';
import { isValid } from 'date-fns';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import fetching from '../../fetchURL';

export default function ItemInfo({
  useremail,
  itemname,
  catagory,
  description,
  lof,
  cover,
  createdAt,
  by,
  _id,
}) {
  if (!useremail || !itemname || !catagory || !description || !lof || !cover || !createdAt || !by || !_id) {
    return <div>Error: Missing item information</div>;
  }

  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);
  const {id} = useParams();
  const {userInfo} = useContext(UserContext);
  async function deleted(){
    const data = new FormData();
    data.set('id', id);
    const response = await fetch(`${fetching}/client/delete/${id}`, {
          method: 'DELETE',
          body: data,
          credentials: 'include',
        });
  }

  var lostorfound = "";
  var coloring = "";
  if(lof=='lost'){
    lostorfound="Lost Item";
    coloring = "red";
  }
  else{
    lostorfound="Found Item"
    coloring = "green";
  }

  console.log("userid",userInfo.id);
  console.log("byid",by._id);
  return (
    <>
    <div className='container flex justify-center mx-auto my-9'>
    <Card className="max-w-[55rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={`${fetching}/`+cover}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h2" color={coloring} className='uppercase'>
        {lostorfound}
        </Typography>
        <Typography variant="h3" color="blue-gray" className='uppercase'>
        {itemname}
        </Typography>
        <Typography variant="h5" color="light-blue" className='capitalize'>
        {catagory}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
        {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="items-center ">
        <Typography color="gray" className=" font-normal">
          Uploaded by {by.username} 
        </Typography>
        <Typography color="gray" className=" font-normal">
           Email {useremail}
        </Typography>
        </div>
            <div>{format(isValid(new Date(createdAt)) ? new Date    (createdAt) : new Date(), 'MMM d, yyyy HH:mm')
            }</div>
      </CardFooter>
    </Card>
    </div>
    <div className='container w-[55rem] mx-auto flex'>
    {userInfo.id === by._id && (
        <>
        
        <Link to={`/edit/${_id}`} >
        <Button>Edit</Button>;
        </Link>
        </>
    )}
    {userInfo.id === by._id && (
        <>
            <Popover placement="bottom-end">
              <PopoverHandler>
                <Button>Delete</Button>
              </PopoverHandler>
              <div className='z-50 static'>
              <PopoverContent className="w-72">
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                  <div>
                    <Typography variant="h6" color="blue-gray">
                     Do you really want to delete this item?
                    </Typography>
                  </div>
                </div>
                  <Link to={'/'} className="text-initial font-medium text-blue-gray-500">
                      <Button onClick={deleted}>Delete</Button>
                  </Link>
              </PopoverContent>
              </div>
            </Popover>
        </>
    )}
    </div>
    </>
  )
}
