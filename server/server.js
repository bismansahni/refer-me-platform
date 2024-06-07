const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Debug log to verify environment variable loading
console.log('MONGO_URI:', process.env.MONGO_URI);

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/referrals', require('./routes/referrals'));

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
