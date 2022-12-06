import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuthCalls from "../../hooks/useAuthCalls";
import GoogleIcon from "@mui/icons-material/Google";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import registerStyle from "./Register.module.css";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState(initialValues);
  const { register, googleAuth } = useAuthCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      registerInfo?.email,
      registerInfo?.password,
      registerInfo?.name,
      registerInfo?.lastName
    );
  };

  return (
    <Grid container justifyContent="center" className={registerStyle["main"]}>
      <Grid item xl={8} md={12} className={registerStyle["img-box"]}>
        <img
          className={registerStyle["img"]}
          src="https://picsum.photos/1600/900"
          alt="register_image"
        />
      </Grid>
      <Grid item xl={4} md={12} className={registerStyle["form-container"]}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className={registerStyle["form"]}
        >
          <img src="./images/blok.png" alt="blog" />
          <TextField
            required
            type="text"
            name="name"
            variant="outlined"
            label="Name"
            className={registerStyle["input"]}
            value={registerInfo?.name || ""}
            onChange={handleChange}
          />
          <TextField
            required
            type="text"
            name="lastName"
            variant="outlined"
            label="Last Name"
            className={registerStyle["input"]}
            value={registerInfo?.lastName || ""}
            onChange={handleChange}
          />
          <TextField
            required
            type="email"
            name="email"
            variant="outlined"
            label="Email"
            className={registerStyle["input"]}
            value={registerInfo?.email || ""}
            onChange={handleChange}
          />
          <TextField
            required
            type="password"
            name="password"
            variant="outlined"
            label="Password"
            className={registerStyle["input"]}
            value={registerInfo?.password || ""}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<FingerprintIcon />}
          >
            Register
          </Button>
          <Button
            type="button"
            onClick={googleAuth}
            variant="contained"
            endIcon={<GoogleIcon />}
          >
            Continue with
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
