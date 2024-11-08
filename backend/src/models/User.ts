// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password?: string; // Optional for Google users
    googleId?: string; // Optional for email/password users
    profileImage?: string; // Optional field for profile image
    createdAt: Date;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String }, // For email/password login
    googleId: { type: String }, // For Google login
    profileImage: { type: String }, // Store Google profile image URL
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>('User', UserSchema);
