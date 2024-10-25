// models/Client.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IClient extends Document {
    clientName: string;
    city: string;
    phoneno: number
    createdAt: Date;
}

const ClientSchema: Schema = new Schema({
    clientName: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    phoneno: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IClient>('Client', ClientSchema);
