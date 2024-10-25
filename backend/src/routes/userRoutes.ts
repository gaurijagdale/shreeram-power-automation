// routes/userRoutes.ts
import express, { Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import verifyToken from '../middlewares/verifyToken';

import User from '../models/User';
import Client from '../models/Client';

const router = express.Router();

// Generate JWT token function
const generateToken = (user: any) => {
    const payload = {
        id: user._id,
        email: user.email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET || 'your_jwt_secret', {
        expiresIn: '1h',
    });
};


// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

// Google OAuth callback route
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
        const token = generateToken(req.user); // Generate JWT
        res.cookie('token', token, { httpOnly: true, secure: false }); // Send JWT as cookie
        res.redirect('http://localhost:5173'); // Redirect to frontend
    }
);

// Add a new client
router.post('/add-client', async (req, res) => {
    try {
        const { clientName, city, phoneno } = req.body; // Get data from request body

        const newClient = new Client({
            clientName,
            city,
            phoneno,
        });

        await newClient.save();
        res.status(201).json({ message: 'Client added successfully', client: newClient });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add client' });
    }
});

router.post('/auth/logout', (req: express.Request, res: express.Response) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed', error: err });
        }
        res.clearCookie('token'); // Clear the token cookie if you're using JWT
        res.status(200).json({ message: 'Logged out successfully' });
    });
});

// Universal check login route
router.get('/auth/check-login', verifyToken, (req: Request, res: Response): void => {
    // If the user is set on the request object, they are logged in
    if (req.user) {
        res.json({ isLoggedIn: true, user: req.user });
    } else {
        res.json({ isLoggedIn: false });
    }
});



// Get all users and clients
router.get('/users', verifyToken, async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        const clients = await Client.find();
        res.json({ users, clients });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;
