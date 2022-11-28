import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuthCalls from "../hooks/useAuthCalls";

const initialValues = {
  email: "",
  password: "",
};

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState(initialValues);

  const { register } = useAuthCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(registerInfo?.email, registerInfo?.password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
    </Box>
  );
};

export default Register;
