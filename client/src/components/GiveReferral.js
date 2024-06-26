// src/components/GiveReferral.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Ensure to load the environment variables
const apiUrl = process.env.REACT_APP_API_BASE_URL;


const GiveReferral = () => {
    const [referrals, setReferrals] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchReferrals = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('No token found');
                return;
            }

            try {
                const res = await axios.get(`${apiUrl}/api/referrals`, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setReferrals(res.data);
            } catch (error) {
                setMessage('Error fetching referrals');
            }
        };

        fetchReferrals();
    }, []);

    const handleGiveReferral = async (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            setMessage('No token found');
            return;
        }

        try {
            const res = await axios.post(`${apiUrl}/api/referrals/give/${id}`, {}, {
                headers: {
                    'x-auth-token': token
                }
            });
            setMessage('Referral given successfully');
            setReferrals(referrals.filter(referral => referral._id !== id));
        } catch (error) {
            setMessage('Error giving referral');
        }
    };

    return (
        <div>
            <h2>Give a Referral</h2>
            {message && <p>{message}</p>}
            <ul>
                {referrals.map(referral => (
                    <li key={referral._id}>
                        <p>{referral.title}</p>
                        <p>{referral.description}</p>
                        <p>Industry: {referral.industry}</p>
                        <p>Requested by: {referral.user.name} ({referral.user.email})</p>
                        <button onClick={() => handleGiveReferral(referral._id)}>Give Referral</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GiveReferral;
