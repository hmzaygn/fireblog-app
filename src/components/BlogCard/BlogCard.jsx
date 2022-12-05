import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Paper } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate } from "react-router";
import BlogCardStyle from "./BlogCard.module.css";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();
  return (
    <Paper
      // sx={{ p: 1 }}
      elevation={10}
      className={BlogCardStyle["blog-card"]}
      onClick={() => navigate("/details", { state: blog })}
    >
      <Card sx={{ width: "23rem", height: "35rem", p: 1 }}>
        <CardActionArea>
          <CardMedia
            className={BlogCardStyle["blog-card-img"]}
            component="img"
            height="300"
            image={blog.img}
            alt={blog.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3">
              {blog.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: "5rem", overflow: "hidden" }}
            >
              {blog.desc}
            </Typography>
            <Typography variant="h6" mt={1}>
              {blog.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <FavoriteBorderIcon />
          <CommentIcon />
        </CardActions>
      </Card>
    </Paper>
  );
}
