import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { putBlog } from "../../helpers/firebaseFunctions";
import { toastSuccess } from "../../helpers/toastify";
import updateBlogStyle from "./UpdateBlog.module.css";

const UpdateBlog = () => {
  const { state: blog } = useLocation();
  const [updatedBlog, setUpdatedBlog] = useState(blog);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBlog({ ...updatedBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putBlog(updatedBlog);
    toastSuccess("Updated Successfully");
    navigate("/");
  };

  return (
    <Box className={updateBlogStyle["main"]}>
      <Typography variant="h2" className={updateBlogStyle["header"]}>
        ~~ Update Blog ~~
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className={updateBlogStyle["form"]}
      >
        <img src="./images/blog2.png" alt="add_blog" />
        <TextField
          required
          type="text"
          name="title"
          variant="outlined"
          label="Blog Name"
          value={updatedBlog.title}
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          type="text"
          name="desc"
          variant="outlined"
          label="Description"
          value={updatedBlog.desc}
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          type="url"
          name="img"
          variant="outlined"
          label="Image Url"
          value={updatedBlog.img}
          onChange={handleChange}
        ></TextField>
        <Button type="submit" variant="contained">
          Update Blog
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateBlog;
