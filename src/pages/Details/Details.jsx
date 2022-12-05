import { Box, Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthProvider";
import { deleteBlog } from "../../helpers/firebaseFunctions";
import detailsStyle from "./Details.module.css";

const Details = () => {
  const { state: blog } = useLocation();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteBlog(id);
    navigate("/");
  };

  return (
    <Box className={detailsStyle["main"]}>
      <Paper elevation={12} className={detailsStyle["card"]}>
        <img className={detailsStyle["img"]} src={blog.img} alt={blog.title} />
        <Typography variant="h2">{blog.title}</Typography>
        <Typography>{blog.desc}</Typography>
        <Typography variant="h4">Added by </Typography>
        <Typography variant="h5">{blog.email}</Typography>

        <Stack spacing={1} direction="row">
          {currentUser.email === blog.email && (
            <>
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
            </>
          )}
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Details;
