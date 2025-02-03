import { Request, Response } from 'express';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';
import User, { UserDocument } from '../models/userModel.js'; // Import UserDocument

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
      cartItem.price = product.price * cartItem.quantity;
    } else {
      cart.items.push({ product: productId, quantity, price: product.price * quantity });
    }

    cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart' });
  }
};

export const viewCart = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as UserDocument)._id; // Assuming req.user contains the authenticated user
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart' });
  }
};