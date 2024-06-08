// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <div className="navbar">
                <h1>Referral Platform</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="split-container">
                <div className="split left">
                    <div className="centered">
                        <button className="dashboard-button" onClick={() => navigate('/request-referral')}>Request Referral</button>
                    </div>
                </div>
                <div className="split right">
                    <div className="centered">
                        <button className="dashboard-button" onClick={() => navigate('/give-referral')}>Give Referral</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
