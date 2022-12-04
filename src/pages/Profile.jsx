import { Box, Typography } from "@mui/material";
import React from "react";
import { useAuthContext } from "../contexts/AuthProvider";

const Profile = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  return (
    <Box>
      <Typography variant="h2">Profile</Typography>
      <Typography variant="h4">{currentUser?.displayName}</Typography>
      {currentUser.photoURL ? (
        <img
          style={{ width: "250px" }}
          src={currentUser.photoURL}
          alt="profile_image"
        />
      ) : (
        <img
          style={{ width: "250px" }}
          src="./blank-profile-picture.png"
          alt="profile_image"
        />
      )}
      <Typography>{currentUser?.email}</Typography>
    </Box>
  );
};

export default Profile;
