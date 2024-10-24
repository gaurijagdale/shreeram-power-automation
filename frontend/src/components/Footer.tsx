import React from 'react';
import { Link } from 'react-router-dom';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';


function Footer() {
    // const openExternalLink = (url) => {
    //     window.open(url, '_blank');
    // };

    return (
        <div className='w-full px-24 pt-20 pb-8 flex flex-col text-Dblue space-y-11 bg-gradient-to-b from-white to-Pblue'>

            <div aria-label='upper' className='w-full flex items-center justify-between'>

                <div aria-label='left-upper' className='w-2/5 flex flex-col space-y-5'>
                    <Link to="/">
                        <img src="/brand-logo.png" alt="brandLogo" className='w-16 h-16' />
                    </Link>

                    <h3 className='font-semibold text-lg'>Innovative Power and Process Automation for a Wide Range of Industries</h3>
                    <p className='text-sm font-medium cursor-pointer hover:underline' onClick={() => openExternalLink('tel:9545812812')}><PhoneRoundedIcon sx={{ fontSize: 22, marginRight: '10px' }} /> +91 95458 12812</p>
                    <p className='text-sm font-medium cursor-pointer hover:underline' onClick={() => openExternalLink('mailto:contact@shreerampowerengg.com')}><EmailRoundedIcon sx={{ fontSize: 22, marginRight: '10px' }} /> contact@shreerampowerengg.com</p>
                    <p className='text-sm font-medium cursor-pointer hover:underline' onClick={() => openExternalLink('https://maps.app.goo.gl/B9m9RkZEw9xKADca6')}><PlaceRoundedIcon sx={{ fontSize: 22, marginRight: '10px' }} /> Gat No 12, Patilchowk, Vetalnager, Daund, 413801</p>
                </div>

                <div aria-label='right-upper' className='flex flex-col space-y-3 items-center justify-center  rounded-3xl'>
                    <div className='p-6 text-sm flex flex-col space-y-3 border-l-2 border-Dblue rounded-xl'>
                        <p className='text-sm font-semibold'>Transformer Division Factory</p>
                        <p className='text-sm font-light'><PhoneRoundedIcon sx={{ fontSize: 16, marginRight: '10px' }} /> +91 95458 12812</p>
                        <p className='text-sm font-light'><PlaceRoundedIcon sx={{ fontSize: 16, marginRight: '10px' }} /> Gat No 12, Patilchowk, Vetalnager, Daund, 413801</p>
                    </div>

                    <div className='p-6 text-sm flex flex-col space-y-3 border-l-2 border-Dblue rounded-xl'>
                        <p className='text-sm font-semibold'>Engineering & Fabrication Division Factory</p>
                        <p className='text-sm font-light'><PhoneRoundedIcon sx={{ fontSize: 16, marginRight: '10px' }} /> +91 95458 12812</p>
                        <p className='text-sm font-light'><PlaceRoundedIcon sx={{ fontSize: 16, marginRight: '10px' }} /> Gat No 12, Patilchowk, Vetalnager, Daund, 413801</p>
                    </div>
                </div>

            </div>


            <div aria-label='copyright' className='flex items-center justify-between font-light font-Josef text-base'>
                <h4>Copyright © 2024 | Shreeram Power and Automation Pvt. Ltd.</h4>
                <div className='flex items-center justify-end space-x-2'>
                    <p>All rights reserved</p>
                    <p>|</p>
                    <p>Privacy Policy</p>
                    <p>|</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Footer