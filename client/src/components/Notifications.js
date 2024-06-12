// src/components/Notifications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './styles/Notifications.css';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const token = localStorage.getItem('token');
            console.log('Token:', token); // Log the token

            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            const endpoint = `${apiUrl}/api/notifications`;
            console.log('Fetching notifications from:', endpoint); // Log the API endpoint

            try {
                const res = await axios.get(endpoint, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                console.log('Notifications received:', res.data); // Debug log for received notifications
                setNotifications(res.data);
                localStorage.setItem('notifications', JSON.stringify(res.data)); // Store notifications in localStorage
            } catch (error) {
                console.error('Error fetching notifications', error);
            }
        };

        const storedNotifications = localStorage.getItem('notifications');
        if (storedNotifications) {
            console.log('Using stored notifications from localStorage'); // Log when using localStorage
            setNotifications(JSON.parse(storedNotifications));
        } else {
            console.log('No stored notifications found, fetching from server'); // Log when fetching from server
            fetchNotifications();
        }
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
