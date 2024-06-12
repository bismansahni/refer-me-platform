// src/components/MainDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './styles/MainDashboard.css';

const MainDashboard = () => {
    const navigate = useNavigate();

    const handleRequestReferral = () => {
        navigate('/request-referral');
    };

    const handleGiveReferral = () => {
        navigate('/give-referral'); // Ensure you have this route defined
    };

    return (
        <div>
            <Navbar />
            <div className="main-dashboard">
                <button className="btn btn-success" onClick={handleRequestReferral}>Request Referral</button>
                <button className="btn btn-success" onClick={handleGiveReferral}>Give Referral</button>
            </div>
        </div>
    );
};

export default MainDashboard;
