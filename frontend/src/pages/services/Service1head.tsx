import React from 'react'
import servicesImg from '../../assets/imgs/services.jpg';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";


function Service1Head() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='w-full px-24 py-20 grid grid-cols-2 text-Dblue gap-7'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1.5, x: 0 } : {}} // Only animate if in view
                transition={{ delay: 0.7, duration: 1, type: "spring" }}
            >
                <div aria-label='Text' className='col-span-1 flex flex-col items-start justify-center space-y-7'>
                    <h1 className='text-7xl text-Pblue font-semibold font-Josef'>Our Services</h1>
                    <div className='space-y-3'>
                        <h4 className='text-4xl font-medium'>
                            Our services include detailed engineering, procurement, inspection, erection, and commissioning.
                        </h4>
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
    );
}

export default Service1Head
