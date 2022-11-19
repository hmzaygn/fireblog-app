import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
