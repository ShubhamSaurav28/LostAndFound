import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
import { Link, UNSAFE_ViewTransitionContext } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import {Navigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


   
  export default function LoginCard() {
    const [useremail,setuseremail]=useState('');
    const  [password,setpassword]=useState('');
    const [redirect,setRedirect] = useState(false);

    const {setUserInfo} = useContext(UserContext);

    async function login(ev) {
      ev.preventDefault();
      const response = await fetch('http://localhost:4001/api/login', {
        method: 'POST',
        body: JSON.stringify({useremail, password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          console.log(userInfo);
          toast.success("Login sucessful");
          setRedirect(true);
          
        });
      } else {
        toast.error('wrong credentials');
      }
    }

    if (redirect) {
      return <Navigate to={'/'} />
    }



    return (
      <>
        <div className="container mx-auto">
      <Card className="w-96 mx-auto mt-[20vh]">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input type="email" label="Email" size="lg" value={useremail} onChange={event =>setuseremail(event.target.value)} />
          <Input type="password" label="Password" size="lg" value={password} onChange={event =>setpassword(event.target.value)} />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth type="submit" onClick={login}>
            Login
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to='/signup' >
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
      </div>
      <ToastContainer/>
      </>
    );
  }