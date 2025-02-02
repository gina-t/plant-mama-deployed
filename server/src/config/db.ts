import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env.development in the root directory
dotenv.config({ path: '../../.env.development' });

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_DB_URI;
    if (!mongoUri) {
      throw new Error("MONGO_DB_URI is not defined in the environment variables");
    }
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`Error: ${String(error)}`);
    }
    process.exit(1);
  }
};

export default connectDB;