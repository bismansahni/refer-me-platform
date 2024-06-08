// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RequestReferral from './components/RequestReferral';
import GiveReferral from './components/GiveReferral';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request-referral" element={<RequestReferral />} />
        <Route path="/give-referral" element={<GiveReferral />} />
      </Routes>
    </Router>
  );
};

export default App;
