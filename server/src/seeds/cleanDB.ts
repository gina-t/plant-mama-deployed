import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import Cart from '../models/cartModel.js';

const cleanDB = async (): Promise<void> => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Cart.deleteMany({});
    console.log('Database cleaned');
    
  } catch (error) {
    console.error('Error cleaning database:', error);
    process.exit(1);
  }
};

export default cleanDB;