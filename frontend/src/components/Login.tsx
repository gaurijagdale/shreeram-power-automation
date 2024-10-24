import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import brandLogo from '../assets/imgs/brand-logo.png';
import cr1 from '../assets/imgs/login1.jpg'
import cr2 from '../assets/imgs/login2.jpeg'
import cr3 from '../assets/imgs/login3.jpg'


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const imageUrls = [
        cr1,
        cr2,
        cr3
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
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
    );
}

function Login() {
    return (
        <div className='bg-black py-16 px-24'>
            <div className='main bg-white rounded-xl grid grid-cols-2 gap-5 py-16 px-12 text-center'>
                <div className='imgs col-span-1 flex items-center justify-center'>
                    {/* Replacing the brand logo image with the carousel */}
                    <CarouselPlugin />
                </div>
                <div className='form col-span-1 flex flex-col items-center space-y-7'>
                    <div>
                        <img src={brandLogo} alt="brandLogo" className='w-20 h-20' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-Dblue text-3xl font-semibold'>SHREERAM POWER AND AUTOMATION</h1>
                        <p className='text-zinc-500 text-sm font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, incidunt soluta. Nam esse ut saepe ad tempore consectetur possimus, quam aperiam rerum perferendis.
                        </p>
                    </div>
                    <div className='flex flex-col space-y-5 items-center w-full'>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email" className='text-start text-zinc-600'>Email</Label>
                            <Input type="email" id="email" placeholder="Email" className='h-12' />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password" className='text-start text-zinc-600'>Password</Label>
                            <Input type="password" id="Password" placeholder="Password" className='h-12' />
                        </div>
                        <Button variant="auto" className='w-96 h-12 text-md'>Login</Button>
                        <Button variant="outline" className='w-96 h-12 text-md bg-slate-50 font-semibold hover:bg-slate-100 border-none'>
                            Login with Google
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
