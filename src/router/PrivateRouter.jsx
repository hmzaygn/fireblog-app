import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
