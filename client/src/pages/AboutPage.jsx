import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import FooterBar from "../components/layouts/FooterBar";
//    border-2 border-black
export default function AboutPage() {
  return (
      <>
      <div className="container  mx-auto mt-9">
          <Typography variant="h2" color="blue-gray" className="m-6 mb-10 flex justify-center">
          About Us
        </Typography>
    <Card className="mt-6 w-120 mx-auto" shadow={false}>
      <CardHeader color="blue-gray" className="relative ">
        <img 
          className="h-[500px] w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Welcome to Lost and Found
        </Typography>
        <Typography>
        Lost and Found is not just a platform; it's a mission to reunite people with their misplaced belongings in the college world. Our journey began with a simple realization: mistakes happen, and sometimes, those mistakes lead to the unintentional loss of valuable items. That's where Lost and Found steps in, offering a unique and user-friendly space for the recovery of lost items and the return of found belongings.
        </Typography>
        <div></div>
        <Typography variant="h4" color="blue-gray"> Our Mission</Typography>
        <Typography> At Lost and Found, our mission is clear: to create a seamless and efficient system that facilitates the return of lost items to their rightful owners. We understand the challenges that college life can bring, and we're here to turn those challenges into opportunities for connection and community.
        </Typography>
        <Typography variant="h4" color="blue-gray">What We Offer</Typography>
       <div>
        <b>Lost Items Database:</b> Our platform allows users to report and search for lost items, making it easy to reconnect with belongings that have gone astray.
        <br/>
        <b>Found Items Repository:</b> If you've found something, Lost and Found provides a centralized hub to report found items, ensuring a smooth process for returning them to their owners.
        <br/>
        <b>User-Friendly Interface:</b>We've designed our platform with simplicity in mind, making it easy for both beginners and experienced users to navigate.
        </div>
        <Typography variant="h4"  color="blue-gray">Our Values</Typography> 
        <div>
        <b>Integrity:</b> We believe in honesty and transparency, ensuring a trustworthy environment for all users.
        <br/>
        <b>Community:</b> Lost and Found is more than just a platform; it's a community of individuals helping each other in the spirit of camaraderie.
        <br/>
        <b>Innovation:</b> We are committed to continually improving and innovating our services to better serve the college community.
        </div>
        {/* <div>
        Meet the Team
        Frontend Developers
        [Team Member 1]: [Brief description of their background, expertise, and role in Lost and Found.]

        [Team Member 2]: [Brief description of their background, expertise, and role in Lost and Found.]

        Backend Developers
        [Team Member 3]: [Brief description of their background, expertise, and role in Lost and Found.]

        [Team Member 4]: [Brief description of their background, expertise, and role in Lost and Found.]
        </div> */}
        <Typography variant="h4" color="blue-gray">Get in Touch</Typography>
        We're here to make your Lost and Found experience seamless. If you have any questions, suggestions, or just want to share your success stories, feel free to reach out to us at 915*******.

        Thank you for being a part of Lost and Found. Together, we're creating a community that values both possessions and the connections we make along the way.
      </CardBody>
    </Card>
    </div>
    <FooterBar/>
    </>
  );
}