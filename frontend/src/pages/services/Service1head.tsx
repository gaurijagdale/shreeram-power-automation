import React from 'react'
import servicesImg from '../../assets/imgs/services.jpg';
import { Link } from 'react-router-dom';

function Service1Head() {
    return (
        <div className='w-full px-24 py-20 grid grid-cols-2 text-Dblue gap-7'>
            <div aria-label='Text' className='col-span-1 flex flex-col items-start justify-center space-y-7'>
                <h1 className='text-7xl text-Pblue font-semibold font-Josef'>Our Services</h1>
                <div className='space-y-3'>
                    <h4 className='text-4xl font-medium'>
                        Our services include detailed engineering, procurement, inspection, erection, and commissioning. 
                    </h4>
                </div>

                {/* <button className='w-full px-16 py-3 rounded-lg bg-Pblue hover:bg-opacity-90 font-semibold text-xl tracking-wider' >Contact Us</button> */}
                <Link to='/contactus' className='w-full text-center px-16 py-3 rounded-lg bg-Dblue text-white hover:bg-opacity-90 font-semibold text-xl tracking-wider'>
                    Contact Us
                </Link>
            </div>

            <div aria-label='Right-Img' className='col-span-1 flex items-center justify-center'>
                <img src={servicesImg} alt="illustration img" className='' />
            </div>
        </div>
    );
}

export default Service1Head
