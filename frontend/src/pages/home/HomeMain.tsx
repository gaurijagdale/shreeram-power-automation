import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from "@/components/hooks/use-toast";

import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';

function HomeMain() {
    const location = useLocation();
    const message = location.state?.message; // Get the message from the location state
    const { toast } = useToast(); // Get the toast function

    useEffect(() => {
        if (message) {
            toast({
                className: "bg-green-600 text-white font-semibold border-none rounded-lg p-4 shadow-lg",
                title: message, 
            });
        }
    }, [message, toast]); // Run effect when message changes

    return (
        <div className='mt-24'>
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
        </div>
    );
}

export default HomeMain;
