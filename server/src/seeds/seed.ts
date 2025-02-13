import cleanDB from './cleanDB.js';
import connectDB from '../config/db.js';
import { Admin, Cart, Product, User } from '../models/index.js';
import productData from './products.json' assert { type: 'json' };
import userData from './users.json' assert { type: 'json' };
import cartData from './carts.json' assert { type: 'json' };
import adminData from './admin.json' assert { type: 'json' };

const seedDatabase = async (): Promise<void> => {
  try {
    await connectDB();
    await cleanDB();

    
    const admin = await Admin.insertMany(adminData);
    console.log('Admin created:', admin);
    
    const product = await Product.insertMany(productData);
    console.log('Product created:', product);

    const cart = await Cart.insertMany(cartData);
    console.log('Cart created:', cart);

    for (let i = 0; i < userData.length; i++) {
      const user = await User.create({
        ...userData[i], 
        cart: cart[i]._id,
      });
      console.log('User created:', user);
    }
    console.log('Seeding completed successfully');
    process.exit(0);
  
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();