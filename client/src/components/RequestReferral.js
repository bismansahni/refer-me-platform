import React, { useState } from 'react';
import axios from 'axios';

const RequestReferral = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [industry, setIndustry] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            setMessage('No token found');
            return;
        }

        try {
            const res = await axios.post('https://refer-me-server.vercel.app/api/referrals', { title, description, industry }, {
                headers: {
                    'x-auth-token': token
                }
            });
            setMessage('Referral request created');
        } catch (error) {
            setMessage('Error creating referral request');
        }
    };

    return (
        <div>
            <h2>Request a Referral</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                />
                <button type="submit">Request Referral</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RequestReferral;
