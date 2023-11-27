import React from "react";
import { Typography } from "@material-tailwind/react";

export default function ErrorPage() {

  return (
    <div id="error-pager" className="container text-center mt-[45vh] mx-auto ">
      <Typography variant="h1" className="text-">404!</Typography>
      <Typography variant="h4">Oops!</Typography>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
      </p>
    </div>
  );
}