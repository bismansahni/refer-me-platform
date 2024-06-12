// src/components/RequestReferral.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './styles/RequestReferral.css';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const RequestReferral = () => {
    const [companyName, setCompanyName] = useState('');
    const [jobUrl, setJobUrl] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchResume = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get(`${apiUrl}/api/profile/profile`, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setResumeUrl(res.data.resumeUrl);
            } catch (error) {
                console.error('Error fetching resume', error);
            }
        };
        fetchResume();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            setMessage('No token found');
            return;
        }

        try {
            await axios.post(`${apiUrl}/api/referrals`, { companyName, jobUrl, resumeUrl }, { // Ensure this path matches your backend route
                headers: {
                    'x-auth-token': token
                }
            });
            setMessage('Referral request created');
        } catch (error) {
            console.error('Error creating referral request', error);
            setMessage('Error creating referral request');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="request-referral-container">
                <h2>Request a Referral</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="url"
                            placeholder="Job URL"
                            value={jobUrl}
                            onChange={(e) => setJobUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="url"
                            placeholder="Resume URL"
                            value={resumeUrl}
                            readOnly
                        />
                    </div>
                    <button type="submit">Request Referral</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default RequestReferral;
