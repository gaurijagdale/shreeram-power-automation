import React from 'react'
import { Link } from 'react-router-dom';
import IndustryHome from '../../assets/imgs/image.png';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FadeText } from "@/components/magicui/fade-text";
import ShimmerButton from "@/components/magicui/shimmer-button";


function Home1() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Animates once when it comes into view

    return (
        <div className=''>
            <div className=' w-full h-[450px]' style={{ backgroundImage: `url(${IndustryHome})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className=' w-full h-full  p-12 flex flex-col items-center justify-center space-y-3'>
                    <FadeText
                        className="text-white text-4xl font-semibold"
                        direction="up"
                        framerProps={{
                            show: { transition: { delay: 0.3 } },
                        }}
                        text="SHREERAM POWER AND AUTOMATION PVT. LTD."
                    />
                    <FadeText
                        className="text-white text-md"
                        direction="up"
                        framerProps={{
                            show: { transition: { delay: 0.5 } },
                        }}
                        text="Innovative Power and Process Automation for a Wide Range of Industries"
                    />
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: +10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
                        transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
                    >
                        <ShimmerButton className="shadow-2xl hover:scale-105">
                            <Link to="/services" className='z-50'>
                                <span className="whitespace-pre-wrap text-center text-sm text-black font-semibold leading-none tracking-tight dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    Get our services
                                </span>
                            </Link>
                        </ShimmerButton>
                    </motion.div>

                    {/* <Link to="/services" className=' px-10 py-3 bg-white rounded-lg text-Dblue text-md font-semibold bg-opacity-80 hover:bg-Lblue '>Get our services</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Home1
