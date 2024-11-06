
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import brandLogo from '../assets/imgs/brand-logo.png';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useToast } from "@/components/hooks/use-toast"; // Import the useToast hook

import axios from 'axios';
import { checkLoginStatus } from '../utils/authUtils'; // Import the utility function
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface User {
    email: string;
    id: string;
    exp: number;
    iat: number;
}

function Navbar() {
    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
                "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
                "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null); // Initialize user as an object or null
    const googleLogoutURL = "http://localhost:5001/api/auth/logout";
    const handleLogout = async () => {
        try {
            await axios.post(googleLogoutURL, {}, { withCredentials: true });
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };


    const [formData, setFormData] = useState({
        phoneno: '',
        email: '',
        description: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { toast } = useToast(); // Get the toast function

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleQuotesSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');

        // Basic validation
        if (formData.phoneno.length < 10 || formData.phoneno.length > 15) {
            setErrorMessage('Phone number must be between 10 and 15 digits.');
            return;
        }

        // Prepare data for backend (you can modify this as needed)
        const requestData = {
            phoneno: formData.phoneno,
            email: formData.email,
            description: formData.description,
        };

        try {
            // Replace with your API call
            const response = await axios.post('http://localhost:5001/api/quotes-route', requestData);
            console.log('Response from server:', response.data);

            toast({
                className: "bg-green-600 text-white font-semibold border-none rounded-lg p-4 shadow-lg",
                title: "Your quote request has been submitted successfully!",
            });

            //reseting the form
            setFormData({
                phoneno: '',
                email: '',
                description: '',
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                className: "bg-red-600 text-white font-semibold border-none rounded-lg p-4 shadow-lg",
                title: "Failed to submit your request. Please try again.",
            });
        }
    };


    useEffect(() => {
        const checkAndFetchData = async () => {
            const loginStatus = await checkLoginStatus(); // Use the imported function
            console.log("Checking login status...")
            setIsLoggedIn(loginStatus.isLoggedIn);
            if (loginStatus.isLoggedIn) {
                setUser(loginStatus.user)
            }
        };

        checkAndFetchData(); // Check login status and fetch data

    }, []);


    return (
        <div className='w-full bg-background/60 backdrop-blur flex justify-between items-center py-6 px-12 fixed top-0 z-20'>
            <div id='nav-left'>
                <Link to="/">
                    <img src={brandLogo} alt="brandLogo" className='w-12 h-12' />
                </Link>
            </div>
            <div className="flex flex-grow justify-center">

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to='/services'>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid grid-cols-4 gap-2 text-xs p-3 font-medium w-[500px]">
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-blue-500">Transformer Oil Filtration</h4>
                                            <p className="text-slate-500">
                                                Our filtration systems remove impurities using advanced low-temperature, high-vacuum technology.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-blue-500">Transformer Testing Services</h4>
                                            <p className="text-slate-500">
                                                Comprehensive testing includes resistance, ratio, polarity, phase, losses, impedance, and temperature.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-blue-500">Process Automation</h4>
                                            <p className="text-slate-500">
                                                Optimize your operations with custom automation solutions tailored to industry needs.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-blue-500">Equipment Maintenance</h4>
                                            <p className="text-slate-500">
                                                Routine maintenance services to ensure your equipment operates at peak efficiency.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-blue-500">Energy Audits</h4>
                                            <p className="text-slate-500">
                                                Comprehensive energy assessments to help you maximize energy efficiency and reduce costs.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-blue-500">Automation Consultation</h4>
                                            <p className="text-slate-500">
                                                Expert advice on integrating automation to enhance productivity and minimize operational risks.
                                            </p>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link to='/aboutus'>
                                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid grid-cols-4 gap-2 text-xs p-3 font-medium w-[500px]">
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <Link to='/aboutus#intro'>
                                                <h4 className="font-semibold group-hover:text-blue-500">Our Team</h4>
                                                <p className="text-slate-500">
                                                    Meet the experts driving innovation and reliability in our projects.
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <Link to='/aboutus#intro'>
                                                <h4 className="font-semibold group-hover:text-blue-500">Contact Us</h4>
                                                <p className="text-slate-500">
                                                    Get in touch to discuss how we can support your automation needs.
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <Link to='/aboutus#info'>
                                                <h4 className="font-semibold group-hover:text-blue-500">Core Values</h4>
                                                <p className="text-slate-500">
                                                    Be Inclusive, Be Inventive, and Get Results Right - our guiding principles.
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <Link to='/aboutus#info'>
                                                <h4 className="font-semibold group-hover:text-blue-500">Industries We Serve</h4>
                                                <p className="text-slate-500">
                                                    Explore the diverse industries that benefit from our automation solutions.
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <Link to='/aboutus#mission'>
                                                <h4 className="font-semibold group-hover:text-blue-500">Our Mission</h4>
                                                <p className="text-slate-500">
                                                    Discover our commitment to excellence in power and process automation.
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-blue-100 rounded-md p-2 group">
                                            <Link to='/aboutus#mission'>
                                                <h4 className="font-semibold group-hover:text-blue-500">Our Vision</h4>
                                                <p className="text-slate-500">
                                                    Learn about our goal to become the most trusted automation specialist.
                                                </p>
                                            </Link>
                                        </div>


                                    </div>
                                </NavigationMenuContent>
                            </Link>
                        </NavigationMenuItem>


                    </NavigationMenuList>
                </NavigationMenu>
            </div>


            <div className="flex items-center">
                <Dialog>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>

                                <DialogTrigger asChild className="cursor-pointer">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Get our Quotes
                                    </NavigationMenuLink>
                                </DialogTrigger>

                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <DialogContent className="sm:max-w-2xl">
                        <DialogHeader className="space-y-3">
                            <DialogTitle>Request a Quote</DialogTitle>
                            <DialogDescription>
                                Fill out the form below to receive a detailed quote for your desired product. <br /> We will get back to you shortly.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleQuotesSubmit}>
                            <div className="flex items-center space-x-2 my-4">
                                <div className="grid flex-1 gap-4">
                                    <Label htmlFor="phoneno">Phone Number</Label>
                                    <Input
                                        name="phoneno"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        minLength={10}
                                        maxLength={15}
                                        required
                                        pattern="\d{10,15}"
                                        value={formData.phoneno}
                                        onChange={handleChange}
                                    />
                                    {errorMessage && <span className="text-sm text-red-500">{errorMessage}</span>}

                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                    <Label htmlFor="description">Product Description</Label>
                                    <Textarea
                                        name="description"
                                        rows={6}
                                        placeholder="Provide a detailed description of the product you are interested in"
                                        required
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <DialogFooter className="sm:justify-start">
                                <Button type="submit" variant="default">
                                    Submit Request
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>

                    <NavigationMenu>
                        {isLoggedIn ?
                            (
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Welcome {user!.email.length > 15 ? `${user!.email.substring(0, 15)}...` : user!.email}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-full">
                                                <button className="px-5 py-2 text-red-400 font-semibold hover:bg-red-200" onClick={handleLogout}>Logout</button>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>

                            ) : (

                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link to="/login">
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Login
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            )
                        }
                    </NavigationMenu>

                </Dialog>
            </div>

        </div>
    )
}

export default Navbar
