import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate } from "react-router";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();
  console.log(blog);
  return (
    <Card
      sx={{ maxWidth: 300 }}
      onClick={() => navigate("/details", { state: blog })}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.desc}
          </Typography>
          <Typography variant="h6">{blog.email}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FavoriteBorderIcon />
        <CommentIcon />
      </CardActions>
    </Card>
  );
}
