// routes/userRoutes.ts
import express, { Request, Response } from 'express';
import passport from 'passport';
import User from '../models/User';
import Client from '../models/Client'; // Import the Client model

const router = express.Router();

// Google Auth Routes
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect to desired route
        res.redirect('http://localhost:5173'); // Redirect to your React app
    }
);


// routes/auth.js or auth route file
// router.get('/auth/check-login', (req: express.Request, res: express.Response) => {
//     if (req.isAuthenticated()) {  // Now this should work
//         return res.json({ isLoggedIn: true, user: req.user });
//     } else {
//         return res.json({ isLoggedIn: false });
//     }
// });

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

// Get all users and clients
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        const clients = await Client.find();
        res.json({ users, clients }); // Send both collections
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;
