// src/components/CreateReferral.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateReferral = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [industry, setIndustry] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post('http://localhost:3012/api/referrals', 
                { title, description, industry }, 
                { headers: { 'x-auth-token': token, 'Content-Type': 'application/json' } });
            setMessage('Referral created successfully');
        } catch (error) {
            setMessage('Error creating referral');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    type="text" 
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
                <button type="submit">Create Referral</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateReferral;