import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function About4Vision() {

    const missionRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (missionRef.current) {
            missionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div ref={missionRef} id="mission" className='w-full px-24 py-12 grid grid-cols-4 gap-x-16'>
            <div aria-label='Mission' className='col-span-2 p-12 flex flex-col items-center justify-center space-y-5 rounded-2xl bg-Lblue text-Dblue'>
                <h4 className='text-3xl font-semibold font-Josef'>Our Mission</h4>
                <p className='text-base font-medium'>Our mission is to be the leader in all we do by using our extensive experience and knowledge to provide excellence in services, ensuring that all customers receive the highest standard of excellence, expertise and responsiveness as we are not content with just simply getting the job done, our true meaning goes beyond service.</p>
            </div>
            <div aria-label='Vision' className='col-span-2 p-12 flex flex-col items-center justify-center space-y-5 rounded-2xl bg-Dblue text-white'>
                <h4 className='text-3xl font-semibold font-Josef'>Our Vision</h4>
                <p className='text-base font-medium'>To be the most recognized, reliable and only independent Transformer, Motor rewinding specialist; utilizing our knowledge base and reputation to expand into related market segments, to keep our legacy in rendering service with seriousness, quality consciousness and innovativeness.</p>
            </div>
        </div>
    )
}

export default About4Vision;