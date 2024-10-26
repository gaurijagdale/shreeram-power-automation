// models/Client.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IClient extends Document {
    clientName: string;
    clientAddress?: string; // Optional
    createdAt: Date;
}

const ClientSchema: Schema = new Schema({
    clientName: { type: String, required: true, unique: true },
    clientAddress: { type: String }, // Optional
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IClient>('Client', ClientSchema);
