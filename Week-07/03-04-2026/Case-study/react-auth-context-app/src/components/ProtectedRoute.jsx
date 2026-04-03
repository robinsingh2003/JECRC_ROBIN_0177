import React from "react";
import { useAuth } from "../context/authcontext";
import { Navigate } from "react-router-dom";
function ProtectedRoute ({children}){
    const{ isAuthenticated,loading } = useAuth();
    if(loading){
        return <p>Loading......</p>
    }
   if (!isAuthenticated) {
  return <Navigate to="/login" />;
}
    return children;
}
export default ProtectedRoute;
