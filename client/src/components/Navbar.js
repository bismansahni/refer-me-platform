// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="navbar">
            <h1>Referral Platform</h1>
            <div className="navbar-right">
                <p>Welcome, {user && user.name}</p>
                <button className="dashboard-button" onClick={() => navigate('/dashboard')}>Dashboard</button>
                <button className="notifications-button" onClick={() => navigate('/notifications')}>Notifications</button>
                <button className="account-settings-button" onClick={() => navigate('/account-settings')}>Account Settings</button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
