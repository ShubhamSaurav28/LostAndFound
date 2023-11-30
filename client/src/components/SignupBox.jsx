import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Navigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetching from "../../fetchURL";


 
export default function SignUpPage() {
  const [useremail,setuseremail]=useState('');
  const  [password,setpassword]=useState('');
  const [username,setusername]=useState('');
  const [redirect,setRedirect] = useState(false);
  const [confirmpassword,setconfirmpassword]=useState('');
  const [phoneno,setphoneno] = useState('');

  // const navigate = useNavigate();
  
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch(`${fetching}/api/register`, {
      method: 'POST',
      body: JSON.stringify({username,useremail,phoneno,password,confirmpassword}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      setRedirect(true);
      toast.success("Registration sucessful")
    } else {
      toast.error("Registration failed");
    }
  }

  if (redirect) {
    return <Navigate to={'/login'} />
  }



  return (
    <>
      <div className="container mx-auto flex justify-center relative top-[8vh]">
     <Card color="" className="p-4" shadow>
      {/* <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography> */}
      <CardHeader
        variant="gradient"
        color="gray"
        className=" grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
      <form className=" w-80 max-w-screen-lg sm:w-96">
        <div className=" flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
          
            type="text"
            value={username} 
            onChange={event =>setusername(event.target.value)}
            size="lg"
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Phone No.
          </Typography>
          <Input
          
            type="tel"
            value={phoneno} 
            pattern="[0-9]{10}"
            onChange={event =>setphoneno(event.target.value)}
            size="lg"
            placeholder="phone no."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
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
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
          
            value={password} 
            onChange={event =>setpassword(event.target.value)}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Confirm Password
          </Typography>
          <Input
          
            value={confirmpassword} 
            onChange={event =>setconfirmpassword(event.target.value)}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>        
        <Button className="mt-5" fullWidth type="submit" onClick={register}>
          sign up
        </Button>
        <Typography color="gray" className="mt-2 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
      </CardBody>
    </Card>
    </div>
    <ToastContainer/>
    </>
  );
}