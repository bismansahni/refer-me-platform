import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import RequestReferral from './components/RequestReferral';
import GiveReferral from './components/GiveReferral';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1 className="text-center my-4">Referral Platform</h1>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/protected" element={<PrivateRoute><Protected /></PrivateRoute>} />
                    <Route path="/request-referral" element={<PrivateRoute><RequestReferral /></PrivateRoute>} />
                    <Route path="/give-referral" element={<PrivateRoute><GiveReferral /></PrivateRoute>} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
