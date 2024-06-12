// src/components/Notifications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Ensure you have a Navbar component
import './styles/Notifications.css'; // Ensure you have appropriate styles

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get(`${apiUrl}/api/notifications`, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setNotifications(res.data);
            } catch (error) {
                console.error('Error fetching notifications', error);
            }
        };
        fetchNotifications();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="notifications-container">
                <h2>Notifications</h2>
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification._id}>
                            {notification.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;
