// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import RequestReferral from './components/RequestReferral';
import GiveReferral from './components/GiveReferral';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} /> {/* Default route */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/protected" element={<Protected />} />
                <Route path="/request-referral" element={<RequestReferral />} />
                <Route path="/give-referral" element={<GiveReferral />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
