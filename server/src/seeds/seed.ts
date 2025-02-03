import cleanDB from './cleanDB.js';
import Product from '../models/productModel.js';
import productData from './products.json' assert { type: 'json' };
import connectDB from '../config/db.js';
import mongoose from 'mongoose';

const seedDatabase = async () => {
  try {
    await connectDB();
    await cleanDB();
    console.log('Database cleaned');

    // Insert products from JSON file
    await Product.insertMany(productData);
    console.log('Products inserted successfully!');

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();