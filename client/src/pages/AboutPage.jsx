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
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Our Lost and Found Website
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ab dolore amet at fugiat hic neque, quis est maiores eum ratione, et tenetur sed saepe qui! Debitis aliquam culpa magnam quasi exercitationem aperiam molestias minus repellendus totam consequatur quis sit esse odit, quos temporibus rem quidem, dolor iure illo iste. Pariatur vero illo possimus iusto iure ut voluptas cum cupiditate ab, cumque optio expedita nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste laboriosam, recusandae placeat reiciendis, commodi enim debitis natus quia possimus necessitatibus magni autem atque ducimus deserunt dolor culpa. Praesentium, quisquam. Esse nisi, possimus labore aliquam veritatis sapiente dolores placeat dolore hic dicta earum, eaque non quia cupiditate ipsam iure nam explicabo dolorem temporibus laudantium? Tempore culpa error non porro aut voluptates, necessitatibus veritatis consequuntur ad quidem quas quos minus voluptatibus. Iusto provident voluptatibus explicabo optio ipsam architecto non reprehenderit. Vero molestiae harum nesciunt sit repellendus, voluptatem deleniti! Officiis ullam eveniet cum iure facere, doloremque totam consectetur nam recusandae, fugit adipisci, neque delectus quaerat libero quidem iste ducimus tenetur suscipit debitis provident quod nulla. Iste, consequatur excepturi? Perspiciatis, soluta ratione? Blanditiis!
          </Typography>
        </CardBody>
      </Card>
      </div>
      <FooterBar/>
      </>
    );
  }