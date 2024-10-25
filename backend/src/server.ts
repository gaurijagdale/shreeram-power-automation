// npx ts-node src/server.ts

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import session from 'express-session';
import passport from 'passport';

import userRoutes from './routes/userRoutes';

import './config/passport'; // Import passport configuration

// Load environment variables from .env file
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // Adjust the origin as necessary
app.use(express.json());

// Configure session
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_default_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI as string; // Ensure it's a string
        if (!mongoURI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }

        await mongoose.connect(mongoURI); // No need for options now
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

// Call the MongoDB connection function
connectDB();

// Use routes
app.use('/api', userRoutes);

// Sample route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
