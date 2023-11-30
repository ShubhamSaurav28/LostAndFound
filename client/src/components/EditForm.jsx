import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {Navigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetching from '../../fetchURL';


export default function EditForm() {
    // const [selected, setSelected] = useState(catagory[0])
        const {id} = useParams();

      const [useremail,setuseremail]=useState('');
      const [itemname,setitemname]=useState('');
      const [catagory,setcatagory]=useState('');
      const [description,setdescription]=useState('');
      const [files, setFiles] = useState('');
      const [redirect, setRedirect] = useState(false);
      const [lof,setlof] = useState('')

      const handleChangedecp = (event) => {
        setdescription(event.target.value)
      }
      const handleChangecata = (event) => {
        setcatagory(event.target.value)
      }
      const handleChangelof = (event) => {
        setlof(event.target.value)
      }

      useEffect(() => {
        fetch(`${fetching}/client/post/`+id)
          .then(response => {
            response.json().then(postInfo => {
              setdescription(postInfo.description);
              setcatagory(postInfo.catagory);
              setuseremail(postInfo.useremail);
              setitemname(postInfo.itemname);
              setlof(postInfo.lof);
            });
          });
      }, []);

      async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('useremail', useremail);
        data.set('itemname', itemname);
        data.set('catagory', catagory);
        data.set('lof', lof);
        data.set('description', description);
        console.log(description);
        data.set('id', id);
        if (files?.[0]) {
          data.set('file', files?.[0]);
        }
        const response = await fetch(`${fetching}/client/post`, {
          method: 'PUT',
          body: data,
          credentials: 'include',
        });
        if (response.ok) {
          setRedirect(true);
          toast.success("Edited sucessfully");
        }
        else if(!response.ok){
          toast.error("Cannot edit");
        }
      }
      
      if (redirect) {
        return <Navigate to={'/'} />
      }



    return (
        <>
        <div className="container w-[60vw] text-center mx-auto justify-items-center my-6">
       <Card color="transparent">
        <Typography variant="h4" color="blue-gray">
          Edit Form
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details for Editing Item details.
        </Typography>
        <form className="mt-6 mb-2 mx-3 max-w-screen-lg " onSubmit={updatePost} >
          <div className="mb-1 flex  flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Item Name
            </Typography>
            <Input
              type="text"
              value={itemname} 
              onChange={event =>setitemname(event.target.value)}
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              type="email"
              value={useremail} 
              onChange={event =>setuseremail(event.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="flex mb-2">
            <div className="w-[50%]">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Image
            </Typography>
                <input type="file" onChange={ev => setFiles(ev.target.files)} className="block cursor-pointer w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "/>
            </div>
            <div className="w-[50%]">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                        Catagory
                    </Typography>
                <div className="relative h-10 w-72 min-w-full">     
                <select name="catagory"  value={catagory} onChange={handleChangecata}
                 className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option value="null">None</option>
                    <option value="elctronic">Electronic</option>
                    <option value="notebook">Notebook</option>
                    <option value="bottle">Bottle</option>
                    <option value="document">Document</option>
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" for='catagory'>
                    Select a Catagory
                </label>
            </div>
            </div>
            </div>
            <Typography variant="h6" color="blue-gray" className="">
                        Lost or Found
                    </Typography>
                <div className="relative h-10 w-72 min-w-full">     
                <select name="catagory"  value={lof} onChange={handleChangelof}
                 className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option value="lost">Lost</option>
                    <option value="found">Found</option>
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" for='catagory'>
                    Select lost or found
                </label>
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-2">
                Description
            </Typography>
            <div className="w-[100%]">
            <div className="relative w-full min-w-[200px]">
                <textarea
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="description"
                type="description"
                value={description}
                onChange={handleChangedecp}
                ></textarea>
                <label for='description' className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Description
                </label>
            </div>
            </div>
            {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
          </div>
          <Button className="mt-6 mb-5" fullWidth type="submit" >
            Save
          </Button>
        </form>
      </Card>
      </div>
      </>
    );
  }
