import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="/update" element={<PrivateRouter />}>
          <Route path="" element={<UpdateBlog />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
