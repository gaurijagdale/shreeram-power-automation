import { Router } from 'express';
import User from '../models/User';

const router = Router();

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;
