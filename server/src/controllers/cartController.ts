import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';
import { UserDocument } from '../models/userModel.js'; 

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    const userId = (req.user as UserDocument)._id; 

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [], total: 0 });
    }

    const cartItem = cart.items.find(item => item.product.toString() === productId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.items.push({
        _id: new mongoose.Types.ObjectId(),
        product: product._id as mongoose.Types.ObjectId,
        quantity,
        price: product.price,
      } as any); // Cast to any to bypass TypeScript checks
    }

    cart.total += product.price * quantity;
    await cart.save();

    return res.status(200).json(cart);
  } catch (error) {
    console.error('Error adding to cart:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const viewCart = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as UserDocument)._id;
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    return res.status(200).json(cart);
  } catch (error) {
    console.error('Error viewing cart:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};