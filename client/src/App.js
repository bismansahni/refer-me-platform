import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import RequestReferral from './components/RequestReferral';
import GiveReferral from './components/GiveReferral';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <div className="App">
                <h1>Referral Platform</h1>
                <nav>
                    <ul>
                        {!token ? (
                            <>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/protected">Protected</Link>
                                </li>
                                <li>
                                    <Link to="/request-referral">Request Referral</Link>
                                </li>
                                <li>
                                    <Link to="/give-referral">Give Referral</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/protected" element={<PrivateRoute element={Protected} />} />
                    <Route path="/request-referral" element={<PrivateRoute element={RequestReferral} />} />
                    <Route path="/give-referral" element={<PrivateRoute element={GiveReferral} />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
