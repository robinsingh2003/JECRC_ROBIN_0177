import React from 'react';
import { useAuth } from '../context/authcontext';
import { Navigate } from 'react-router-dom';
import { div } from 'three/tsl';
function UserProfile (){
    const {user,logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <div>
            <h2>User Profile </h2>
            <p>UserName:{user.username}</p>
            <button onclick={handleLogout}><Logout></Logout> </button>
        </div>
    )
}
export default UserProfile;