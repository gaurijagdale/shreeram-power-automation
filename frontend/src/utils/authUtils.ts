// utils/auth.ts
import axios from 'axios';

export const checkLoginStatus = async () => {
    try {
        const response = await axios.get('http://localhost:5001/api/auth/check-login', {
            withCredentials: true // Include credentials for session
        });
        return response.data; // Returns { isLoggedIn: true, user: ... }
    } catch (error) {
        return { isLoggedIn: false }; // In case of an error, assume not logged in
    }
};
