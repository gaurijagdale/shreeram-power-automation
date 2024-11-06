// models/Quote.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IQuote extends Document {
    phoneno: string;
    email: string;
    description: string;
    createdAt: Date;
}

const QuoteSchema: Schema = new Schema({
    phoneno: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IQuote>('Quote', QuoteSchema);
