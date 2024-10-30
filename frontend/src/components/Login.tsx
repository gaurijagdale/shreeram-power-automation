
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { checkLoginStatus } from '../utils/authUtils'; // Import the utility function


import brandLogo from '../assets/imgs/brand-logo.png';
import cr1 from '../assets/imgs/login1.jpg';
import cr2 from '../assets/imgs/login2.jpeg';
import cr3 from '../assets/imgs/login3.jpg';
import cr4 from '../assets/imgs/work.jpeg';


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const imageUrls = [
        cr1,
        cr2,
        cr3,
        cr4
    ];

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {imageUrls.map((imageUrl, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img
                                        src={imageUrl}
                                        alt={`Slide ${index + 1}`}
                                        className="object-cover w-full h-full rounded"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}



function Login() {
    const navigate = useNavigate();

    const [isSignUp, setIsSignUp] = useState(false);

    const googleLoginURL = "http://localhost:5001/api/auth/google";

    const openExternalLink = (url: string) => { // user that ${loginRouteURL} for Google login
        window.open(url, '_blank');
    };

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            const loginStatus = await checkLoginStatus(); // Use the imported function
            console.log("Checking login status in login page...")

            if (loginStatus.isLoggedIn) {
                navigate('/', { state: { message: 'You are already logged in!' } })
            }
        };

        checkUserLoggedIn(); // Check login status

    }, [navigate]);

    return (
        <div className='bg-black py-16 px-24'>
            <div className='main bg-white rounded-xl grid grid-cols-2 gap-5 py-16 px-12 text-center'>
                <div className='imgs col-span-1 flex items-center justify-center'>
                    <CarouselPlugin />
                </div>

                <div className='form col-span-1 flex flex-col items-center space-y-7'>
                    <div>
                        <a href="/">
                            <img src={brandLogo} alt="brandLogo" className='w-20 h-20' />
                        </a>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-Dblue text-3xl font-semibold'>SHREERAM POWER AND AUTOMATION</h1>
                        <p className='text-zinc-500 text-sm font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, incidunt soluta. Nam esse ut saepe ad tempore consectetur possimus, quam aperiam rerum perferendis.
                        </p>
                    </div>

                    {/* Conditional Rendering for Sign-Up and Login */}
                    {!isSignUp ? (
                        <div className='flex flex-col space-y-5 items-center'>
                            {/* Login Form */}
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email" className='text-start text-zinc-600'>Email</Label>
                                <Input type="email" id="email" placeholder="Email" className='h-12' />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="password" className='text-start text-zinc-600'>Password</Label>
                                <Input type="password" id="Password" placeholder="Password" className='h-12' />
                            </div>
                            <Button variant="auto" className='w-96 h-12 text-md'>Login</Button>
                            <div className='w-full flex items-center justify-center space-x-4'>
                                <hr className='border border-slate-400 w-full' />
                                <p>or</p>
                                <hr className='border border-slate-400 w-full' />
                            </div>
                            <Button variant="outline" onClick={() => { openExternalLink(googleLoginURL) }} className='w-96 h-12 text-md bg-slate-50 font-semibold border hover:bg-slate-100 border-none hover:rounded-full'>
                                Login with
                                <img src="/googleLogo.svg" className='w-20 mt-1' alt="google_logo" />
                            </Button>

                            <p>Don't have an account? <span onClick={toggleForm} className='text-blue-600 font-medium hover:underline cursor-pointer'>Sign Up</span></p>
                        </div>


                    ) : (


                        <div className='flex flex-col space-y-5 items-center'>
                            {/* Sign-Up Form */}
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email" className='text-start text-zinc-600'>Email</Label>
                                <Input type="email" id="email" placeholder="Email" className='h-12' />
                            </div>

                            <div className="flex w-full max-w-sm space-x-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="password" className='text-start text-zinc-600'>Password</Label>
                                    <Input type="password" id="password" placeholder="Password" className='h-12' />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="confirmPassword" className='text-start text-zinc-600'>Confirm Password</Label>
                                    <Input type="password" id="confirmPassword" placeholder="Confirm Password" className='h-12' />
                                </div>
                            </div>

                            <Button variant="auto" className='w-96 h-12 text-md'>Register</Button>
                            <div className='w-full flex items-center justify-center space-x-4'>
                                <hr className='border border-slate-400 w-full' />
                                <p>or</p>
                                <hr className='border border-slate-400 w-full' />
                            </div>
                            <Button variant="outline" onClick={() => { openExternalLink(googleLoginURL) }} className='w-96 h-12 text-md bg-slate-50 font-semibold border hover:bg-slate-100 border-none hover:rounded-full'>
                                Register with
                                <img src="/googleLogo.svg" className='w-20 mt-1' alt="google_logo" />
                            </Button>

                            <p>Already have an account? <span onClick={toggleForm} className='text-blue-600 font-medium hover:underline cursor-pointer'>Login</span></p>
                        </div>
                    )


                    }
                </div>
            </div>
        </div>
    );

}

export default Login;
