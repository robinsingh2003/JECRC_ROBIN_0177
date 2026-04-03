import React from "react";
import { useAuth } from "../context/authcontext"; 
import UserProfile from "../components/UserProfile";
import { div } from "three/tsl";
function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
            <UserProfile/>
        </div>
    );
}
export default Dashboard;