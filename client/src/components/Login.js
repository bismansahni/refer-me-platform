import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3010/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setMessage('Login successful');
            navigate('/dashboard'); // Redirect to the Dashboard after successful login
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="logo.png" alt="Logo" className="logo" />
                <h2>Good to see you again</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your email</label>
                        <input
                            type="email"
                            placeholder="e.g. elon@tesla.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Your password</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="e.g. ilovemangools123"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="show-password-button"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="login-button">Sign in</button>
                </form>
                {message && <p className="message">{message}</p>}
                <div className="links">
                    <a href="/register">Don't have an account?</a>
                    <a href="/forgot-password">Forgot password?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
