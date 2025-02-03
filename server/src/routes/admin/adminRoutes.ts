// adminRoutes handle administartive tasks and management of users, products and reports
import express from 'express';
import { manageUsers, manageProducts } from '../../controllers/adminController.js';
import { protect } from '../../middleware/authMiddleware.js';

const router = express.Router();

// Protected routes
router.get('/users', protect, manageUsers);
router.get('/products', protect, manageProducts);

export default router;