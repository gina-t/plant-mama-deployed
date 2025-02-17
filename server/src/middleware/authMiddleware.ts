import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User, { UserDocument } from '../models/userModel.js';

export const protect = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    console.log('Token:', token); // Debugging statement

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log('Decoded ID:', (decoded as any).id); // Debugging statement

    req.user = await User.findById((decoded as any).id).select('-password') as UserDocument;
    console.log('User:', req.user); // Debugging statement

    if (!req.user) {
      res.status(401);
      throw new Error('User not found');
    }

    next();
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// To make a route protected, you need to create a middleware function that verifies the JWT token inclcuded in the request header. If the token is valid, the middleware allows the request to proceed. If the token is invalid, the middleware returns an error response. Middleware is a function that runs during the request-response cycle. 
