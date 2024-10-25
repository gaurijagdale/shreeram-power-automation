import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Custom request type to include the user property
interface CustomRequest extends Request {
    user?: any;
}

// Middleware to verify JWT token
export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction): void => {
    const token = req.cookies.token; // Get token from cookie

    if (!token) {
        res.status(401).json({ message: 'Unauthorized, no token provided' });
        return; // Return to stop execution
    }

    try {
        // Verify the token and attach the decoded user data to req.user
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
        req.user = decoded; // Attach decoded token data (user info) to request object
        next(); // Continue to next middleware or route
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
