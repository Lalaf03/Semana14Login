import React, { useContext } from "react";
import { UserContext } from "../context/UserPovider";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default RequiredAuth;
