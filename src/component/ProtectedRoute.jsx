// import React from 'react'
// import {Navigate} from "react-router-dom"
// function ProtectedRoute({Children}) {
//      const isLoggedIn = localStorage.getItem("isLoggedIn");
//      if(!isLoggedIn){
//         return <Navigate to="/login"/>
//      }
//      return Children;
// }

// export default ProtectedRoute
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log("Auth check:", isLoggedIn);

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;