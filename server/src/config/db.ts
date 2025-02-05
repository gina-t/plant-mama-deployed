import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../../.env.development') });

import mongoose from 'mongoose';
const mongoUri = process.env.MONGO_DB_URI;

const connectDB = async (): Promise<typeof mongoose.connection> => {
  try {
    if (!mongoUri) {
      throw new Error("MONGO_DB_URI is not defined in the environment variables");
    }
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Error connecting to MongoDB');
  }
};

export default connectDB;