import express from 'express';
import { addToCart, viewCart } from '../../controllers/cartController.js';
import { protect } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, viewCart);
router.post('/add', protect, addToCart);

export default router;