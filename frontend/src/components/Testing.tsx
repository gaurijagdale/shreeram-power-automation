// src/pages/UsersList.tsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { checkLoginStatus } from '../utils/authUtils'; // Import the utility function

const Testing = () => {
    const googleLoginURL = "http://localhost:5001/api/auth/google";
    const googleLogoutURL = "http://localhost:5001/api/auth/logout";


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [users, setUsers] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);


    const openExternalLink = (url: string) => { // user that ${loginRouteURL} for Google login
        window.open(url, '_blank');
    };

    const handleLogout = async () => {
        try {
            await axios.post(googleLogoutURL, {}, { withCredentials: true });
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const fetchData = async () => {
        try {
            const usersResponse = await axios.get('http://localhost:5001/api/users', {
                withCredentials: true // Include credentials for session
            });
            setUsers(usersResponse.data.users);
            setClients(usersResponse.data.clients);
            console.log(users)
            console.log(clients)
        } catch (error) {
            console.error('Error fetching users and clients:', error);
            setError('Failed to fetch users and clients.');
        }
    };

    useEffect(() => {
        const checkAndFetchData = async () => {
            const loginStatus = await checkLoginStatus(); // Use the imported function
            console.log("Checking login status...")
            setIsLoggedIn(loginStatus.isLoggedIn);

            // Use this part when you wanna run the fncs only after user is logged in.
            if (loginStatus.isLoggedIn) {
                // If user is logged in, fetch data
                console.log(loginStatus.user)
                fetchData();

            } else {
                console.log("User not logged in");
            }

        };

        checkAndFetchData(); // Check login status and fetch data

    }, []);


    return (
        <div className='w-full min-h-screen bg-zinc-800 mt-24 px-20 py-20 flex flex-col space-y-7'>

            <div className='text-white'>
                {error && <p className='text-red-600'>{error}</p>}

                {isLoggedIn ? (
                    <>
                        <h3 className='font-semibold text-lg tracking-tighter mb-5'>
                            You are currently <span className='font-mono text-green-500 bg-slate-200 px-4 py-2 rounded-md'>logged in</span>
                        </h3>
                        <div>
                            <h4 className='font-medium text-lg'>Users Logged In</h4>
                            {users.map(user => (
                                <div key={user._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                                    <h3 className="font-bold text-xl text-gray-800">{user.email}</h3>
                                    <p className="text-gray-600">User ID: <span className="font-medium">{user._id}</span></p>
                                    <p className="text-gray-600">Google ID: <span className="font-medium">{user.googleId}</span></p>
                                    <p className="text-gray-600">Created At: <span className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</span></p>
                                </div>))}

                            <br />

                            <h4 className='font-medium text-lg text-white'>Clients</h4>
                            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                                {clients.map(client => (
                                    <p key={client._id} className="text-gray-600">Client ID: <span className="font-medium">{`${client.clientName}, ${client.clientAddress}`}</span></p>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className='font-semibold text-lg tracking-tighter mb-5'>
                            You are currently <span className='font-mono text-red-500 bg-slate-200 px-4 py-2 rounded-md'>logged out</span>
                        </h3>
                        <div>
                            <h4 className='font-medium text-lg'>Users Logged In <span className='font-normal text-base text-zinc-400'>&</span> All Our Clients <span className='font-normal text-base text-zinc-400'>  - - - (will visible only when you logged in)</span></h4>
                        </div>
                    </>

                )}
            </div>

            <Button variant="outline" onClick={() => { openExternalLink(googleLoginURL) }} className='w-96 h-12 text-md bg-slate-50 font-semibold border hover:bg-slate-100 border-none hover:rounded-full'>
                Login with
                <img src="/googleLogo.svg" className='w-20 mt-1' alt="google_logo" />
            </Button>

            <Button variant="outline" onClick={handleLogout} className='w-96 h-12 text-md font-semibold bg-red-100 border-none'>
                Logout
            </Button>


        </div>
    )

}
export default Testing;
