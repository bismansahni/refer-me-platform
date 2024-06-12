// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MainDashboard from './components/MainDashboard';
import AccountSettings from './components/AccountSettings';
import RequestReferral from './components/RequestReferral';
import Notifications from './components/Notifications';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<MainDashboard />} />
                <Route path="/account-settings" element={<AccountSettings />} />
                <Route path="/request-referral" element={<RequestReferral />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </Router>
    );
}

export default App;
