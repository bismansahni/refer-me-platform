import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/AccountSettings.css';
import Navbar from './Navbar';

// Ensure to load the environment variables
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const AccountSettings = () => {
    const [jobProfile, setJobProfile] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get(`${apiUrl}/api/profile/profile`, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setJobProfile(res.data.jobProfile);
                setCompanyName(res.data.companyName);
                setResumeUrl(res.data.resumeUrl);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };
        fetchProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            await axios.post(`${apiUrl}/api/profile/profile`, {
                jobProfile,
                companyName,
                resumeUrl
            }, {
                headers: {
                    'x-auth-token': token
                }
            });
            setMessage('Profile updated successfully');
        } catch (error) {
            setMessage('Error updating profile');
        }
    };

    return (
        <div className="account-container">
            <Navbar />
            <div className="account-settings-container">
                <div className="account-settings-box">
                    <h2>Account Settings</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="jobProfile">Job Profile</label>
                            <input
                                type="text"
                                id="jobProfile"
                                placeholder="Job Profile"
                                value={jobProfile}
                                onChange={(e) => setJobProfile(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resumeUrl">Resume URL</label>
                            <input
                                type="url"
                                id="resumeUrl"
                                placeholder="Resume URL"
                                value={resumeUrl}
                                onChange={(e) => setResumeUrl(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="save-button">Save</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
