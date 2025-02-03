// Functions that fetch requests from MongoDB and return responses
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// Define types for request body
interface ProductRequestBody {
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  imageUrl: string;
}

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create a new product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = asyncHandler(async (req: Request<{}, {}, ProductRequestBody>, res: Response) => {
  const { name, price, description, category, stock, imageUrl } = req.body;

  const product = new Product({
    name,
    price,
    description,
    category,
    stock,
    imageUrl,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product by ID
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProductById = asyncHandler(async (req: Request<{ id: string }, {}, ProductRequestBody>, res: Response) => {
  const { name, price, description, category, stock, imageUrl } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;
  product.category = category || product.category;
  product.stock = stock || product.stock;
  product.imageUrl = imageUrl || product.imageUrl;

  const updatedProduct = await product.save();
  res.status(200).json(updatedProduct);
});

// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  await product.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'Product removed' });
});
