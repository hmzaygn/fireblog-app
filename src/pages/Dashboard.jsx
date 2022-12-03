import { Box } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";
import { useFetch } from "../helpers/firebaseFunctions";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();

  return (
    <Box>
      {isLoading ? (
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <img
            src="https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
            alt="loading"
          />
        </Box>
      ) : (
        blogList?.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      )}
    </Box>
  );
};

export default Dashboard;
