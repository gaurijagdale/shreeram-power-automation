import React from 'react'
import Login1 from '../../assets/imgs/login1.jpg'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Specializedservices() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='w-full px-24 py-20 space-y-10 '>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: +500 }}
                animate={isInView ? { opacity: 1.5, x: 0 } : {}} // Only animate if in view
                transition={{ delay: 0.7, duration: 2, type: "spring" }}
            >
                <div>
                    <h1 className=' text-3xl font-semibold'>SPECIALIZED SOLUTIONS</h1>
                </div>
            </motion.div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -500 }}
                animate={isInView ? { opacity: 1.5, x: 0 } : {}} // Only animate if in view
                transition={{ delay: 0.7, duration: 2, type: "spring" }}
            >
                <div className=' grid grid-cols-3 flex-wrap w-[1090px] overflow-x-scroll'>
                    <div className="col-span-1 h-96 border relative rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 transform rotate-0 hover:bg-black" style={{ backgroundImage: `url(${Login1})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-100 transition-all duration-500"></div>
                        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-extrabold text-xl z-10 transition-opacity duration-500 hover:opacity-0">Afforestation</h1>
                        <div className="absolute inset-0 bg-Dblue px-6 pt-16 pb-4 opacity-0 hover:opacity-100 transition-all duration-500">
                            <h3 className="uppercase text-2xl font-extrabold text-[#FFFFFF]">Afforestation</h3>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Vasundhara actively promotes environmental conservation and restoration, focusing on afforestation, biodiversity preservation, and sustainable land management.</p>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Through community engagement, the NGO works to restore natural ecosystems, ensuring a sustainable environment for future generations.</p>
                        </div>
                    </div>
                    <div className="col-span-1 h-96 border relative rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 transform rotate-0 hover:bg-black" style={{ backgroundImage: `url(${Login1})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-100 transition-all duration-500"></div>
                        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-extrabold text-xl z-10 transition-opacity duration-500 hover:opacity-0">Afforestation</h1>
                        <div className="absolute inset-0 bg-Dblue px-6 pt-16 pb-4 opacity-0 hover:opacity-100 transition-all duration-500">
                            <h3 className="uppercase text-2xl font-extrabold text-[#FFFFFF]">Afforestation</h3>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Vasundhara actively promotes environmental conservation and restoration, focusing on afforestation, biodiversity preservation, and sustainable land management.</p>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Through community engagement, the NGO works to restore natural ecosystems, ensuring a sustainable environment for future generations.</p>
                        </div>
                    </div>
                    <div className="col-span-1 h-96 border relative rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 transform rotate-0 hover:bg-black" style={{ backgroundImage: `url(${Login1})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-100 transition-all duration-500"></div>
                        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-extrabold text-xl z-10 transition-opacity duration-500 hover:opacity-0">Afforestation</h1>
                        <div className="absolute inset-0 bg-Dblue px-6 pt-16 pb-4 opacity-0 hover:opacity-100 transition-all duration-500">
                            <h3 className="uppercase text-2xl font-extrabold text-[#FFFFFF]">Afforestation</h3>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Vasundhara actively promotes environmental conservation and restoration, focusing on afforestation, biodiversity preservation, and sustainable land management.</p>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Through community engagement, the NGO works to restore natural ecosystems, ensuring a sustainable environment for future generations.</p>
                        </div>
                    </div>
                    <div className="col-span-1 h-96 border relative rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 transform rotate-0 hover:bg-black" style={{ backgroundImage: `url(${Login1})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-100 transition-all duration-500"></div>
                        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-extrabold text-xl z-10 transition-opacity duration-500 hover:opacity-0">Afforestation</h1>
                        <div className="absolute inset-0 bg-Dblue px-6 pt-16 pb-4 opacity-0 hover:opacity-100 transition-all duration-500">
                            <h3 className="uppercase text-2xl font-extrabold text-[#FFFFFF]">Afforestation</h3>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Vasundhara actively promotes environmental conservation and restoration, focusing on afforestation, biodiversity preservation, and sustainable land management.</p>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Through community engagement, the NGO works to restore natural ecosystems, ensuring a sustainable environment for future generations.</p>
                        </div>
                    </div>
                    <div className="col-span-1 h-96 border relative rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 transform rotate-0 hover:bg-black" style={{ backgroundImage: `url(${Login1})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-100 transition-all duration-500"></div>
                        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-extrabold text-xl z-10 transition-opacity duration-500 hover:opacity-0">Afforestation</h1>
                        <div className="absolute inset-0 bg-Dblue px-6 pt-16 pb-4 opacity-0 hover:opacity-100 transition-all duration-500">
                            <h3 className="uppercase text-2xl font-extrabold text-[#FFFFFF]">Afforestation</h3>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Vasundhara actively promotes environmental conservation and restoration, focusing on afforestation, biodiversity preservation, and sustainable land management.</p>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Through community engagement, the NGO works to restore natural ecosystems, ensuring a sustainable environment for future generations.</p>
                        </div>
                    </div>
                    <div className="col-span-1 h-96 border relative rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 transform rotate-0 hover:bg-black" style={{ backgroundImage: `url(${Login1})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-100 transition-all duration-500"></div>
                        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-extrabold text-xl z-10 transition-opacity duration-500 hover:opacity-0">Afforestation</h1>
                        <div className="absolute inset-0 bg-Dblue px-6 pt-16 pb-4 opacity-0 hover:opacity-100 transition-all duration-500">
                            <h3 className="uppercase text-2xl font-extrabold text-[#FFFFFF]">Afforestation</h3>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Vasundhara actively promotes environmental conservation and restoration, focusing on afforestation, biodiversity preservation, and sustainable land management.</p>
                            <p className="text-[#FFFFFF] leading-6 font-light mt-4">Through community engagement, the NGO works to restore natural ecosystems, ensuring a sustainable environment for future generations.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Specializedservices
