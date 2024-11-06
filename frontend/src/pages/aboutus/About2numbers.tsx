import React, { useState } from 'react'
import CountUp from 'react-countup';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About2Numbers() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [key1, setKey1] = useState(0);
    const [key2, setKey2] = useState(0);
    const [key3, setKey3] = useState(0);

    const handleMouseOver1 = () => setKey1(prevKey => prevKey + 1);
    const handleMouseOver2 = () => setKey2(prevKey => prevKey + 1);
    const handleMouseOver3 = () => setKey3(prevKey => prevKey + 1);

    return (
        <div className='text-center space-y-8'>

            <div className='w-full px-24 py-12 grid grid-cols-6 gap-x-3 bg-Lblue'>
                <div className='col-span-2 flex flex-col items-center justify-center space-y-3'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: +50 }}
                        animate={isInView ? { opacity: 1.5, y: 0 } : {}} // Only animate if in view
                        transition={{ delay: 0.7, duration: 1, type: "spring" }}
                        className='flex flex-col items-center justify-center space-y-3'
                    >
                        <h4 onMouseOver={handleMouseOver1} className='font-Josef text-3xl font-semibold'>
                            <CountUp key={key1} start={0} end={20} duration={3} />+ Years
                        </h4>
                        <hr className='w-1/5 rounded-full borber border-2 border-Pblue' />
                        <p className='text-center font-light text-sm px-20'>Leveraging over two decades of industry expertise.</p>
                    </motion.div>
                </div>
                <div className='col-span-2 flex flex-col items-center justify-center space-y-3'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: +50 }}
                        animate={isInView ? { opacity: 1.5, y: 0 } : {}} // Only animate if in view
                        transition={{ delay: 1.0, duration: 1, type: "spring" }}
                        className='flex flex-col items-center justify-center space-y-3'
                    >
                        <h4 onMouseOver={handleMouseOver2} className='font-Josef text-3xl font-semibold'>
                            <CountUp key={key2} start={0} end={100} duration={3} />+ Services
                        </h4>
                        <hr className='w-1/5 rounded-full borber border-2 border-Pblue' />
                        <p className='text-center font-light text-sm px-20'>Offering a comprehensive suite of over 100 specialized services.</p>
                    </motion.div>
                </div>
                <div className='col-span-2 flex flex-col items-center justify-center space-y-3'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: +50 }}
                        animate={isInView ? { opacity: 1.5, y: 0 } : {}} // Only animate if in view
                        transition={{ delay: 1.3, duration: 1, type: "spring" }}
                        className='flex flex-col items-center justify-center space-y-3'
                    >
                        <h4 onMouseOver={handleMouseOver3} className='font-Josef text-3xl font-semibold'>
                            <CountUp key={key3} start={0} end={99} duration={3} />% Success
                        </h4>
                        <hr className='w-1/5 rounded-full borber border-2 border-Pblue' />
                        <p className='text-center font-light text-sm px-20'>Achieving a remarkable 99% success rate in our projects.</p>
                    </motion.div>
                </div>
            </div>


            {/* <div className='w-full px-24 py-12 grid grid-cols-6 gap-x-3 bg-Dblue text-white'>
                <div className='col-span-2 flex flex-col items-center justify-center space-y-3'>
                    <h4 className='font-Josef text-3xl font-semibold'><CountUp start={0} end={20} duration={5}/>+ Years</h4>
                    <hr className='w-1/5 rounded-full borber border-2 border-Pblue' />
                    <p className='text-center font-light text-sm text-white px-20'>Upgrade your industrial operations with our advanced automation.</p>
                </div>
                <div className='col-span-2 flex flex-col items-center justify-center space-y-3'>
                    <h4 className='font-Josef text-3xl font-semibold'><CountUp start={0} end={100} duration={5}/>+ Services</h4>
                    <hr className='w-1/5 rounded-full borber border-2 border-Pblue' />
                    <p className='text-center font-light text-sm text-white px-20'>Upgrade your industrial operations with our advanced automation.</p>
                </div>
                <div className='col-span-2 flex flex-col items-center justify-center space-y-3'>
                    <h4 className='font-Josef text-3xl font-semibold'><CountUp start={0} end={99} duration={5}/>% Success</h4>
                    <hr className='w-1/5 rounded-full borber border-2 border-Pblue' />
                    <p className='text-center font-light text-sm text-white px-20'>Upgrade your industrial operations with our advanced automation.</p>
                </div>
            </div>  */}



        </div>

    )
}

export default About2Numbers