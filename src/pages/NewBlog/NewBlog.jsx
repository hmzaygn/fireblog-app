import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthProvider";
import { addBlog } from "../../helpers/firebaseFunctions";
import newBlogStyle from "./NewBlog.module.css";

const NewBlog = () => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    desc: "",
    img: "",
    email: currentUser.email,
  };

  const [blogInfo, setBlogInfo] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogInfo({ ...blogInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(blogInfo);
    setBlogInfo(initialValues);
    navigate("/");
  };

  return (
    <Box className={newBlogStyle["main"]}>
      <Typography variant="h2" className={newBlogStyle["header"]}>
        ~~ New Blog ~~
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className={newBlogStyle["form"]}
      >
        <img src="./images/blog2.png" alt="add_blog" />
        <TextField
          required
          type="text"
          name="title"
          variant="outlined"
          label="Blog Name"
          value={blogInfo?.title || ""}
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          type="text"
          name="desc"
          variant="outlined"
          label="Description"
          value={blogInfo?.desc || ""}
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          type="url"
          name="img"
          variant="outlined"
          label="Image Url"
          value={blogInfo?.img || ""}
          onChange={handleChange}
        ></TextField>
        <Button type="submit" variant="contained">
          Add Blog
        </Button>
      </Box>
    </Box>
  );
};

export default NewBlog;
