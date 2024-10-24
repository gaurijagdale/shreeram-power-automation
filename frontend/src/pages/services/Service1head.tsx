import React from 'react'
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RainbowButton } from "@/components/magicui/rainbow-button";


function Service1head() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Animates once when it comes into view

    return (
        
        <div aria-label='Text' className='flex flex-col items-center justify-center space-y-7 w-full px-24 py-20'>
            <h1 className='text-7xl text-Pblue font-semibold font-Josef'>Our Services</h1>
            <div className='space-y-3'>
                <h4 className='text-lg font-medium text-center'>
                    Our services include detailed engineering, procurement, inspection, erection, and commissioning. With a skilled team and in-house capabilities for system development, integration, and testing, we ensure precise execution and timely delivery of medium to large-scale projects.
                </h4>
            </div>

            {/* <button className='w-full px-16 py-3 rounded-lg bg-Pblue hover:bg-opacity-90 font-semibold text-xl tracking-wider' >Contact Us</button> */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: +10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
                transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
            >
                <RainbowButton className=' w-72'>Get to know us</RainbowButton>
            </motion.div>
        </div>
    )
}

export default Service1head
