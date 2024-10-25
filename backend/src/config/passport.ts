import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: '/api/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
            return done(null, existingUser); // User already exists
        }

        // Create a new user with email
        const newUser = new User({
            googleId: profile.id,
            email: profile.emails[0].value, // Only save email
            createdAt: new Date(),
        });
        await newUser.save();
        done(null, newUser);
    } catch (error) {
        done(error, null);
    }
}));

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    const user = await User.findById(id);
    done(null, user);
});
