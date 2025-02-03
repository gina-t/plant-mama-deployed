import express from 'express';
import { getProducts, getProductById, createProduct, updateProductById, deleteProductById } from '../../controllers/productController.js';
import { protect } from '../../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id',getProductById);

// Protected routes
router.post('/', protect, createProduct);
router.put('/:id',protect, updateProductById)
router.delete('/:id',protect, deleteProductById);

export default router;