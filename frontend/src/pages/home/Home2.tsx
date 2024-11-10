import React from 'react'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { MagicCard } from "@/components/magicui/magic-card";
import { RainbowButton } from "@/components/magicui/rainbow-button";



function Home2() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates once when it comes into view

  return (
    <div className='w-full py-12 flex flex-col items-center justify-center text-Dblue space-y-14'>
      {/* <div>
        <VelocityScroll
          text="Empowering Industries with Advanced Automation Solutions"
          default_velocity={5}
          className="font-display text-center text-sm font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </div> */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: +10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
        transition={{ delay: 0.3, duration: 1.5, type: "spring" }}
      >
        <div className='w-full flex h-96 gap-16 py-7 px-24 '>
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl text-sm px-10"
          >
            <div id='our-company' className='space-y-5'>
              <h2 className='text-3xl text-center text-[#00CCFE] font-semibold tracking-wider'>Our Company</h2>
              <p className='text-slate-500 text-base font-medium text-center'>
                Shreeram Power & Automation Pvt. Ltd. is a leading provider of power and process automation solutions across diverse industries. From engineering to commissioning, we ensure top-notch quality and efficiency for our clients.
              </p>
            </div>
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl text-sm px-10"
          >
            <div id='our-culture' className='space-y-5'>
              <h2 className='text-3xl text-center text-[#00CCFE] font-semibold tracking-wider'>Our Culture</h2>
              <p className='text-slate-500 text-base font-medium text-center'>
                At Shreeram Power & Automation, we embrace innovation, operational excellence, and sustainability. Our values—Be Inclusive, Be Inventive, Get Results Right—drive our diverse team to deliver exceptional solutions while fostering a positive work environment.
              </p>
            </div>
          </MagicCard>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: +10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
        transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
      >
        <RainbowButton className='w-72 hover:scale-105 duration-200 transition-all'>Get to know us</RainbowButton>
      </motion.div>
    </div>
  )
}

export default Home2
