import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";
import { deleteBlog } from "../helpers/firebaseFunctions";

const Details = () => {
  const { state: blog } = useLocation();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteBlog(id);
    navigate("/");
  };

  return (
    <Box>
      <img src={blog.img} alt={blog.title} />
      <Typography variant="h2">{blog.title}</Typography>
      <Typography>{blog.desc}</Typography>
      <Typography variant="h3">{blog.email}</Typography>
      {currentUser.email === blog.email && (
        <Box>
          <Button
            variant="contained"
            onClick={() => navigate("/update", { state: blog })}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(blog.id)}
          >
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Details;
