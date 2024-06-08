import React, { useState } from 'react';
import axios from 'axios';
import './styles/AccountSettings.css';
import Navbar from './Navbar';

const AccountSettings = () => {
    const [jobProfile, setJobProfile] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('jobProfile', jobProfile);
        formData.append('companyName', companyName);
        formData.append('resume', resume);

        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3010/api/users/profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token
                }
            });
            setMessage('Profile updated successfully');
        } catch (error) {
            setMessage('Error updating profile');
        }
    };

    return (
        <div className="dashboard-container">
            <Navbar/>
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
                        <label htmlFor="resume">Resume</label>
                        <input
                            type="file"
                            id="resume"
                            onChange={(e) => setResume(e.target.files[0])}
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
