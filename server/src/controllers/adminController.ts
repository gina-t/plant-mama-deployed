// For each controller that interacts with mongoDB, we need a corresponding model.
import { Request, Response } from 'express';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';

// @desc    Manage users
// @route   GET /api/admin/users
// @access  Private/Admin
export const manageUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error managing users' });
  }
};

// @desc    Manage products
// @route   GET /api/admin/products
// @access  Private/Admin
export const manageProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error managing products' });
  }
};
