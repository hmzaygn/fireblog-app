import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";

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
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        required
        type="text"
        name="name"
        variant="outlined"
        label="Name"
        value={registerInfo?.name || ""}
        onChange={handleChange}
      />
      <TextField
        required
        type="text"
        name="lastName"
        variant="outlined"
        label="Last Name"
        value={registerInfo?.lastName || ""}
        onChange={handleChange}
      />
      <TextField
        required
        type="email"
        name="email"
        variant="outlined"
        label="Email"
        value={registerInfo?.email || ""}
        onChange={handleChange}
      />
      <TextField
        required
        type="password"
        name="password"
        variant="outlined"
        label="Password"
        value={registerInfo?.password || ""}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
      <Button type="button" onClick={googleAuth} variant="contained">
        Continue with Google
      </Button>
    </Box>
  );
};

export default Register;
