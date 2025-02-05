import cleanDB from './cleanDB.js';
import connectDB from '../config/db.js';
import Product from '../models/productModel.js';
import productData from './products.json' assert { type: 'json' };
import User from '../models/userModel.js';
import userData from './users.json' assert { type: 'json' };
import Cart from '../models/cartModel.js';
import cartData from './carts.json' assert { type: 'json' };

const seedDatabase = async () => {
  try {
    await connectDB();
    await cleanDB();

    await Product.insertMany(productData);
    await User.insertMany(userData);
    await Cart.insertMany(cartData);
    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();