import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import ShineBorder from '@/components/magicui/shine-border';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { ArrowRightIcon } from '@radix-ui/react-icons';

function OtherServices() {
    const services = [
        {
            title: "BOILER AUTOMATION",
            description: "Our Boiler Automation solutions enhance operational efficiency, ensuring optimal combustion and steam generation processes. Utilizing cutting-edge control systems, we provide real-time monitoring, precise temperature management, and energy efficiency, all while minimizing downtime and emissions."
        },
        {
            title: "TURBINE AUTOMATION",
            description: "With advanced Turbine Automation services, we deliver precise control for turbine operations, maximizing performance and lifespan. Our systems ensure reliable monitoring, speed control, and protection features, optimizing energy output and supporting sustainable practices."
        },
        {
            title: "MILL AND DIFFUSER AUTOMATION",
            description: "Our Mill and Diffuser Automation systems streamline extraction processes, enhancing yield and energy efficiency. By implementing intelligent control and real-time feedback, we enable consistent operation, reducing wastage and supporting eco-friendly production."
        },
        {
            title: "BOILING HOUSE AUTOMATION",
            description: "Our Boiling House Automation solutions focus on precision and efficiency in sugar and chemical production. We integrate advanced controls for temperature, pressure, and flow, ensuring consistent product quality, reduced energy usage, and enhanced safety."
        },
        {
            title: "INDUSTRIAL AUTOMATION SYSTEM MAINTENANCE SERVICES",
            description: "Our Industrial Automation System Maintenance Services are tailored to ensure uninterrupted operations and longevity of your systems. With regular diagnostics, preventive maintenance, and swift troubleshooting, we help maintain peak performance and prevent costly downtime."
        },
        {
            title: "FIELD INSTRUMENT MAINTENANCE SERVICES",
            description: "Our Field Instrument Maintenance Services provide expert calibration, repair, and optimization for field instruments, ensuring they operate at top precision. From flow meters to temperature sensors, we deliver excellence to support smooth and safe operations."
        }
    ];


    return (
        <div className='w-full px-24 py-16 '>
            <motion.div
                initial={{ opacity: 0, y: +50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 1.5, type: 'spring' }}
            >
                <div className='flex justify-between items-center'>
                    <div className=' w-2/5 items-center'>
                        <ShineBorder
                            className="relative w-fit flex flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background md:shadow-xl"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-md font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                Other Services
                            </span>
                        </ShineBorder>
                    </div>
                    <div className='w-3/5'>
                        <h2 className=' text-4xl font-medium text-center'>We Provide a wide range of services</h2>
                    </div>
                </div>
            </motion.div>

            {services.map((service, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true });

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: +50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.2, duration: 1.5, type: 'spring' }}
                    >
                        <Separator className="my-12" />
                        <div className=' grid grid-cols-2 gap-8'>
                            <div className=' col-span-1 text-3xl font-semibold'>{service.title}</div>
                            <div className=' col-span-1 space-y-5'>
                                <p className=' text-sm font-medium text-zinc-500'>{service.description}</p>
                                <div
                                    className={cn(
                                        'group rounded-full w-fit border border-black/9 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800',
                                    )}
                                >
                                    <AnimatedShinyText className="inline-flex text-xs items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                        <span>✨ DISCOVER THE SERVICE</span>
                                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                                    </AnimatedShinyText>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default OtherServices;
