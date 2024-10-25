import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const UsersList = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        // Function to check login status
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/auth/check-login', {
                    withCredentials: true // Include credentials for session
                });
                setIsLoggedIn(response.data.isLoggedIn);
            } catch (error) {
                console.error('Error checking login status:', error);
                setError('Failed to check login status.');
            }
        };

        // Function to fetch users and clients
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/users', {
                    withCredentials: true // Include credentials for session
                });
                setUsers(response.data.users);   // Access users array
                setClients(response.data.clients); // Access clients array
            } catch (error) {
                console.error('Error fetching users and clients:', error);
                setError('Failed to fetch users and clients.');
            }
        };

        checkLoginStatus(); // Check login status first
        fetchData(); // Then fetch users and clients
    }, []);

    return (
        <div className='mt-24 w-full min-h-screen flex flex-col bg-blue-50 p-20 space-y-5'>
            <h1 className='font-semibold text-2xl'>Users Login Page</h1>

            {/* Conditional rendering based on login status */}
            <div className='bg-blue-200 p-5 rounded-lg'>
                {error && <p className='text-red-600'>{error}</p>} {/* Display error message */}
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
        </div>
    );
};

export default UsersList;
