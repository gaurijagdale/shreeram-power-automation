// passport.d.ts
import { Request } from 'express';

// Declare a global namespace
declare global {
    namespace Express {
        interface User {
            id: string; // or the appropriate type for your user ID
            email: string;
            firstName: string;
            lastName: string;
        }

        interface Request {
            isAuthenticated: () => boolean; // Method added by Passport
            user?: User; // User object added by Passport, can be undefined
        }
    }
}
