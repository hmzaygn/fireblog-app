import { Box, Typography } from "@mui/material";
import React from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import profileStyle from "./Profile.module.css";

const Profile = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  return (
    <Box className={profileStyle["main"]}>
      <Typography variant="h2" className={profileStyle["header"]}>
        ~~ My Profile ~~
      </Typography>
      {currentUser.photoURL ? (
        <img
          className={profileStyle["img"]}
          src={currentUser.photoURL}
          alt="profile_image"
        />
      ) : (
        <img
          className={profileStyle["img"]}
          src="./images/no-profile.jpg"
          alt="profile_image"
        />
      )}
      <Typography variant="h3">{currentUser?.displayName}</Typography>
      <Typography variant="h6">{currentUser?.email}</Typography>
    </Box>
  );
};

export default Profile;
