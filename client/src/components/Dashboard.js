// src/components/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import './styles/Dashboard.css';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName'); // Remove user name from local storage
    window.location.href = '/login';
  };

  return (
    <div className="dashboard-container">
      <Navbar onLogout={handleLogout} />
      <div className="split-container">
        <div className="split left">
          <button className="dashboard-button" onClick={() => window.location.href = '/request-referral'}>
            Request Referral
          </button>
        </div>
        <div className="split right">
          <button className="dashboard-button" onClick={() => window.location.href = '/give-referral'}>
            Give Referral
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
