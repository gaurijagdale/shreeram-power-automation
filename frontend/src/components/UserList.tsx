// src/pages/UsersList.tsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { checkLoginStatus } from '../utils/authUtils'; // Import the utility function

const UsersList = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [error, setError] = useState<string | null>(null); 
    
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5001/api/auth/logout', {}, { withCredentials: true });
            setIsLoggedIn(false); 
            setUsers([]); 
            setClients([]); 
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await axios.get('http://localhost:5001/api/users', {
                    withCredentials: true // Include credentials for session
                });
                setUsers(usersResponse.data.users);
                setClients(usersResponse.data.clients);
            } catch (error) {
                console.error('Error fetching users and clients:', error);
                setError('Failed to fetch users and clients.');
            }
        };

        const checkAndFetchData = async () => {
            const loginStatus = await checkLoginStatus(); // Use the imported function
            setIsLoggedIn(loginStatus);
            if (loginStatus) {
                await fetchData(); // Fetch users and clients only if logged in
            }
        };

        checkAndFetchData(); // Check login status and fetch data
    }, []);

    return (
        <div className='mt-24 w-full min-h-screen flex flex-col bg-blue-50 p-20 space-y-5'>
            <h1 className='font-semibold text-2xl'>Users Login Page</h1>

            <div className='bg-blue-200 p-5 rounded-lg'>
                {error && <p className='text-red-600'>{error}</p>} 
                {isLoggedIn ? (
                    <>
                        <h3 className='font-semibold text-lg tracking-tighter mb-5'>
                            You will see this only if you have <span className='font-mono text-green-500 bg-slate-200 px-4 py-2 rounded-md'>logged in</span>.
                        </h3>
                        <ul>
                            {users.map(user => (
                                <li key={user._id}>{`${user.firstName} ${user.lastName}`}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <h3 className='font-semibold text-lg tracking-tighter mb-5'>
                        You will see this only if you have <span className='font-mono text-red-500 bg-slate-200 px-4 py-2 rounded-md'>logged out</span>.
                    </h3>
                )}
            </div>

            <div className='bg-blue-200 p-5 rounded-lg'>
                <h3 className='font-semibold text-lg tracking-tighter mb-5'>Clients List:</h3>
                <ul>
                    {clients.map(client => (
                        <li key={client._id}>{client.clientName}</li>
                    ))}
                </ul>
            </div>

            <a href="http://localhost:5001/api/auth/google">
                <Button variant="outline" className='w-96 h-12 text-md font-semibold hover:bg-slate-100 border-none'>
                    Login with Google
                </Button>
            </a>
            <Button variant="outline" onClick={handleLogout} className='w-96 h-12 text-md font-semibold bg-red-100 border-none'>
                Logout
            </Button>
        </div>
    );
};

export default UsersList;
