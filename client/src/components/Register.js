// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Register.css';

// Ensure to load the environment variables
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${apiUrl}/api/auth/register`, { name, email, password });
            setMessage('Registration successful');
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Sign Up</h2>
                <p>Please fill your information below</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                    {message && <p className="message">{message}</p>}
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Login to your account</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
