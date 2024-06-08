// src/components/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import './styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="split-container">
                <div className="split left">
                    <div className="centered">
                        <button className="dashboard-button">Request Referral</button>
                    </div>
                </div>
                <div className="split right">
                    <div className="centered">
                        <button className="dashboard-button">Give Referral</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
