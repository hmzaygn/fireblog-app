import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";

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
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        required
        type="email"
        name="email"
        variant="outlined"
        label="Email"
        value={loginInfo?.email || ""}
        onChange={handleChange}
      />
      <TextField
        required
        type="password"
        name="password"
        variant="outlined"
        label="Password"
        value={loginInfo?.password || ""}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
      <Button type="button" onClick={googleAuth} variant="contained">
        Continue with Google
      </Button>
    </Box>
  );
};

export default Login;
