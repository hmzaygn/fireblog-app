import React from "react";
import { useLocation } from "react-router";

const Details = () => {
  const { state: blog } = useLocation();
  console.log(blog);

  return <div>Details</div>;
};

export default Details;
