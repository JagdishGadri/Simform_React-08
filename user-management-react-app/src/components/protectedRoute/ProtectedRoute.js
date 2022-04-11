import "./protectedRoute.css";

import React from "react";
import { Redirect, Route, Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
