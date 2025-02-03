// routes/index.ts serves as the main entry point for all routes 
import express from 'express';
import apiRoutes from './api/index.js';
import authRoutes from './auth/authRoutes.js';
import adminRoutes from './admin/adminRoutes.js';

const router = express.Router();

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

export default router;