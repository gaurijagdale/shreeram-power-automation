import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import servicesImg from '../../assets/imgs/login2.jpeg';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";



function About1Head() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const introRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (introRef.current) {
            introRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);


    const openExternalLink = (url: string) => {
        window.open(url, '_blank');
    }
    return (
        <div ref={introRef} id="intro" className='w-full px-24 py-20 grid grid-cols-2 text-Dblue gap-7'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1.5, x: 0 } : {}} // Only animate if in view
                transition={{ delay: 0.7, duration: 1, type: "spring" }}
            >
                <div aria-label='Text' className='col-span-1 flex flex-col items-start justify-center space-y-7'>
                    <h1 className='text-7xl text-Pblue font-semibold font-Josef'>About Us</h1>
                    <div className='space-y-3'>
                        <h4 className='text-xl font-semibold cursor-pointer hover:text-Pblue' onClick={() => openExternalLink('tel:9545812812')}><PhoneRoundedIcon sx={{ fontSize: 28, marginRight: '10px' }} /> +91 95458 12812</h4>
                        <h4 className='text-xl font-semibold cursor-pointer hover:text-Pblue' onClick={() => openExternalLink('mailto:contact@shreerampowerengg.com')}><EmailRoundedIcon sx={{ fontSize: 28, marginRight: '10px' }} /> contact@shreerampowerengg.com</h4>
                        <h4 className='text-xl font-semibold cursor-pointer hover:text-Pblue' onClick={() => openExternalLink('https://maps.app.goo.gl/B9m9RkZEw9xKADca6')}><PlaceRoundedIcon sx={{ fontSize: 28, marginRight: '10px' }} /> Gat No 12, Patilchowk, Vetalnager, Daund, 413801</h4>
                    </div>

                    {/* <button className='w-full px-16 py-3 rounded-lg bg-Pblue hover:bg-opacity-90 font-semibold text-xl tracking-wider' >Contact Us</button> */}
                    <Button variant="auto" className='w-96 h-12 text-lg font-semibold'>Get our best Quotes</Button>
                </div>
            </motion.div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: +100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Only animate if in view
                transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
            >
                <div aria-label='Right-Img' className='col-span-1 flex items-center justify-center'>
                    <img src={servicesImg} alt="illustration img" className='' />
                </div>
            </motion.div>
        </div>
    )
}

export default About1Head;