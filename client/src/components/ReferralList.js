// src/components/ReferralList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Ensure to load the environment variables
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const ReferralList = () => {
    const [referrals, setReferrals] = useState([]);

    useEffect(() => {
        const fetchReferrals = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`${apiUrl}/api/referrals`, 
                    { headers: { 'x-auth-token': token } });
                setReferrals(res.data);
            } catch (error) {
                console.error('Error fetching referrals', error);
            }
        };
        fetchReferrals();
    }, []);

    return (
        <div>
            <h1>Referrals</h1>
            <ul>
                {referrals.map((referral) => (
                    <li key={referral._id}>
                        <h2>{referral.title}</h2>
                        <p>{referral.description}</p>
                        <p>{referral.industry}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReferralList;
