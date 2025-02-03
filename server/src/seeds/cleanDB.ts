import mongoose from 'mongoose';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import Cart from '../models/cartModel.js';
import connectDB from '../config/db.js';

const cleanDB = async (): Promise<void> => {
  try {
    await connectDB();
    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    await Cart.deleteMany({});

    console.log('Database cleaned');
  } catch (error) {
    console.error('Error cleaning database:', error);
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
};

export default cleanDB;