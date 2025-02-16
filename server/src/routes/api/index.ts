// api/index.ts combines the individual api routes and handles the backend logic
import express from 'express';
import cartRoutes from './cartRoutes.js';
import productRoutes from './productRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use('/cart', cartRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

export default router;