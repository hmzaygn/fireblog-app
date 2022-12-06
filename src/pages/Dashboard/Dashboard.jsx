import { Box, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useFetch } from "../../helpers/firebaseFunctions";
import dashboardStyle from "./Dashboard.module.css";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();

  return (
    <>
      <Typography variant="h2" className={dashboardStyle["header"]}>
        ~~ Dashboard ~~
      </Typography>
      <Box
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
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
    </>
  );
};

export default Dashboard;
