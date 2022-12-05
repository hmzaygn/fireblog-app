import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuthCalls from "../../hooks/useAuthCalls";
import loginStyle from "./Login.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialValues);
  const { login, googleAuth } = useAuthCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginInfo?.email, loginInfo?.password);
  };

  return (
    <Grid container justifyContent="center" className={loginStyle["main"]}>
      <Grid item xl={8} md={12} className={loginStyle["img-box"]}>
        <img
          className={loginStyle["img"]}
          src="https://picsum.photos/1600/900"
          alt="login_image"
        />
      </Grid>
      <Grid item xl={4} md={12} className={loginStyle["form-container"]}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className={loginStyle["form"]}
        >
          <img src="./images/blok.png" alt="blog" />
          <TextField
            required
            type="email"
            name="email"
            variant="outlined"
            label="Email"
            className={loginStyle["input"]}
            value={loginInfo?.email || ""}
            onChange={handleChange}
          />
          <TextField
            required
            type="password"
            name="password"
            variant="outlined"
            label="Password"
            className={loginStyle["input"]}
            value={loginInfo?.password || ""}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<FingerprintIcon />}
          >
            Login
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

export default Login;
