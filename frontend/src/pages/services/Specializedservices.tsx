import React from 'react'
import OtherServices1 from '../../assets/imgs/transformer 1.jpg'
import OtherServices2 from '../../assets/imgs/TransformerOil 2.jpeg'
import OtherServices3 from '../../assets/imgs/transformer_test 3.jpg'
import OtherServices4 from '../../assets/imgs/Transformer_Rewinding 4.jpg'
import OtherServices5 from '../../assets/imgs/LVMV_ACDC_VER 5.jpg'
import OtherServices6 from '../../assets/imgs/rsz_htlt_acdc 5.jpg'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Specializedservices() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const items = [
        {
            title: "Transformer",
            description:
                "Essential and costly, power transformers require regular maintenance and testing for high performance and durability. We conduct routine and as-needed maintenance, ensuring all parameters are optimized.",
            image: OtherServices1, // Replace with the appropriate image URL
        },
        {
            title: "Transformer Oil Filtration System",
            description:
                "Our filtration plants use low-temperature, high-vacuum methods to remove impurities, moisture, and contaminants, ensuring transformer oil quality and system reliability.",
            image: OtherServices2, // Replace with the appropriate image URL
        },
        {
            title: "Transformer Testing Services",
            description:
                "We provide comprehensive transformer testing, including resistance, ratio, polarity, load loss, dielectric validation, and temperature tests to meet exact customer specifications.",
            image: OtherServices3, // Replace with the appropriate image URL
        },
        {
            title: "Transformer Rewinding and Repair",
            description:
                "With expert engineers and state-of-the-art equipment, we offer precision rewinding and repair services, ensuring reliability, efficiency, and international quality standards.",
            image: OtherServices4, // Replace with the appropriate image URL
        },
        {
            title: "HT/LT, AC/DC Motor Rewinding",
            description:
                "Specializing in AC/DC motor rewinding, we use advanced technology for durable, high-performance rewinds, adhering to strict quality standards for all dimensions.",
            image: OtherServices5, // Replace with the appropriate image URL
        },
        {
            title: "LV/MV, AC/DC, Variable Frequency Drive (VFD)",
            description:
                "Our experienced team provides installation, commissioning, repair, and after-sale service for VFDs, with 24/7 phone support and a focus on energy savings.",
            image: OtherServices6, // Replace with the appropriate image URL
        },
    ];



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
                <div className="grid grid-cols-3 flex-wrap w-[1090px] overflow-x-scroll">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-1 h-[450px] border relative rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 transform rotate-0 hover:bg-black"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-100 transition-all duration-500"></div>
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-extrabold text-xl z-10 transition-opacity duration-500 hover:opacity-0">
                                {item.title}
                            </h1>
                            <div className="absolute inset-0 bg-Dblue px-6 pt-16 pb-4 opacity-0 hover:opacity-100 transition-all duration-500">
                                <h3 className="uppercase text-2xl font-extrabold text-[#FFFFFF]">
                                    {item.title}
                                </h3>
                                <p className="text-[#FFFFFF] leading-6 font-light mt-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Specializedservices
