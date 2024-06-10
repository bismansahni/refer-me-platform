// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MainDashboard from './components/MainDashboard'; // Updated import
import AccountSettings from './components/AccountSettings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<MainDashboard />} /> {/* Updated element */}
                <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
        </Router>
    );
}

export default App;
