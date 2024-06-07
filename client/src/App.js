// src/App.js
import React from 'react';
import CreateReferral from './components/CreateReferral';
import ReferralList from './components/ReferralList';

const App = () => {
    return (
        <div className="App">
            <h1>Referral Platform</h1>
            <CreateReferral />
            <ReferralList />
        </div>
    );
};

export default App;
