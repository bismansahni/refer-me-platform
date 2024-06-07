// src/components/Protected.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Protected = () => {
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get('http://localhost:3010/api/protected', {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setMessage(res.data.msg);
            } catch (error) {
                setMessage('Error accessing protected route');
                console.error('Error response:', error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Protected Route</h2>
            <p>{message}</p>
        </div>
    );
};

export default Protected;
