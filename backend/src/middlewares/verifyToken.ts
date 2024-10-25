// src/middleware/verifyToken.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: any; // Extend the request interface to include user data
}

const verifyToken = (req: CustomRequest, res: Response, next: NextFunction): void => {
    const token = req.cookies.token; // Assuming the token is stored in cookies

    // Check if token is provided
    if (!token) {
        res.status(401).json({ message: 'No token provided, access denied.' });
        return; // Ensure no further execution
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Token is not valid.' });
            return; // Ensure no further execution
        }
        req.user = decoded; // Attach the decoded user data to the request
        next(); // Call next() to pass control to the next middleware
    });
};

export default verifyToken;
