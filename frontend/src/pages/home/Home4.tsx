import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"


function Home4() {

    const [clients, setClients] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const allClients = await axios.get('http://localhost:5001/api/get-clients', {
                    withCredentials: true // Include credentials for session
                });
                setClients(allClients.data.clients);
                setError(null);
            } catch (error) {
                console.error('Error fetching clients:', error);
                setError('Failed to fetch clients. Please try again later.');
            }
        }

        fetchClients();

    }, [])



    return (
        <div className='w-full px-32 py-12 '>

            <div className='w-full h-full px-12 py-8 flex flex-col items-center justify-center border border-Dblue rounded-2xl space-y-5'>
                <div id='title' className=''>
                    <h2 className='text-3xl text-Dblue font-semibold tracking-wider'>Our top clients</h2>
                </div>

                {error && (
                    <div className="w-full bg-red-100 text-red-700 p-3 rounded-md">
                        <p>{error}</p>
                    </div>
                )}

                <div className='w-full overflow-y-scroll max-h-96'>
                    {clients.map((client, index) => (
                        <div key={client._id} className={`w-full flex items-center justify-start ${index % 2 === 0 ? 'bg-Lblue' : 'bg-white'} p-3 space-x-3`}>
                            <CheckCircleOutlineIcon />
                            <p>{`${client.clientName}, ${client.clientAddress}`}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>

    )
}

export default Home4
