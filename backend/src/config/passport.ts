import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();

// Generate JWT token
const generateToken = (user: any) => {
    const payload = {
        id: user._id,
        email: user.email,
        profileImage: user.profileImage, // Add profile image here
    };

    return jwt.sign(payload, process.env.JWT_SECRET || 'your_jwt_secret', {
        expiresIn: '1h', // Token expires in 1 hour
    });
};

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: '/api/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
            return done(null, existingUser); // User exists
        }

        // If user doesn't exist, create a new one
        const newUser = new User({
            googleId: profile.id,
            email: profile.emails[0].value, // Use email from Google
            profileImage: profile.photos[0].value, // Save profile image URL
            createdAt: new Date(),
        });
        await newUser.save();
        done(null, newUser);
    } catch (error) {
        done(error, null);
    }
}));

// Serialize and deserialize the user for session (not needed for JWT but used by Passport)
passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    const user = await User.findById(id);
    done(null, user);
});
