import * as React from "react"
import { Link, useLocation } from 'react-router-dom';
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

    return (
        <div className='w-full bg-background/60 backdrop-blur flex justify-between items-center py-6 px-12 fixed top-0 z-20'>
            <div id='nav-left'>
                <Link to="/">
                    <img src={brandLogo} alt="brandLogo" className='w-12 h-12' />
                </Link>
            </div>
            <div>
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
                                <NavigationMenuContent className="">
                                    <div className="grid grid-cols-4 gap-2 text-xs p-3 font-medium w-[500px]">
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                Transformer Oil Filtration System
                                            </h4>
                                            <p className="text-slate-500">
                                                Transformer Oil Filtration Systems use low-temperature, high-vacuum principles to remove particles and moisture to 5 - 10 ppm.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                Transformer Testing Services
                                            </h4>
                                            <p className="text-slate-500">
                                                We offer transformer testing services covering resistance, ratio, polarity, phase relation, losses, impedance and temperature rise.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="col-span-2 space-y-1 hover:bg-red-100 rounded-md p-2 group">
                                            <h4 className="font-semibold group-hover:text-red-500">
                                                For small businesses
                                            </h4>
                                            <p className="text-slate-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/login">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Get our Quotes
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/login">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Login
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export default Navbar
