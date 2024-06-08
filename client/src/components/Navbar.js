// src/components/Navbar.js
import React from 'react';
import './styles/Navbar.css';

const Navbar = ({ onLogout }) => {
  const userName = localStorage.getItem('userName');

  return (
    <div className="navbar">
      <h1>Referral Platform</h1>
      <div className="user-info">
        <span className="user-name">{userName}</span>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
