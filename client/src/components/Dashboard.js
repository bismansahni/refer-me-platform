// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Dashboard</h1>
            <nav style={styles.nav}>
                <Link style={styles.link} to="/protected">Protected</Link>
                <Link style={styles.link} to="/request-referral">Request Referral</Link>
                <Link style={styles.link} to="/give-referral">Give Referral</Link>
                <Link style={styles.link} to="/logout">Logout</Link>
            </nav>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    link: {
        margin: '0.5rem 0',
        fontSize: '1.25rem',
        textDecoration: 'none',
        color: '#4CAF50',
    },
};

export default Dashboard;
