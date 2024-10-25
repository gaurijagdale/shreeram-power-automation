import React from 'react'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import servicesImg from '../../assets/imgs/servicesImg.png';



function About1Head() {
    const openExternalLink = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div className='w-full px-24 py-20 grid grid-cols-5 text-Dblue'>
            <div aria-label='Text' className='col-span-3 flex flex-col items-start justify-center space-y-7'>
                <h1 className='text-7xl text-Pblue font-semibold font-Josef'>About Us</h1>
                <div className='space-y-3'>
                    <h4 className='text-xl font-semibold cursor-pointer hover:text-Pblue' onClick={() => openExternalLink('tel:9545812812')}><PhoneRoundedIcon sx={{ fontSize: 28, marginRight: '10px' }} /> +91 95458 12812</h4>
                    <h4 className='text-xl font-semibold cursor-pointer hover:text-Pblue' onClick={() => openExternalLink('mailto:contact@shreerampowerengg.com')}><EmailRoundedIcon sx={{ fontSize: 28, marginRight: '10px' }} /> contact@shreerampowerengg.com</h4>
                    <h4 className='text-xl font-semibold cursor-pointer hover:text-Pblue' onClick={() => openExternalLink('https://maps.app.goo.gl/B9m9RkZEw9xKADca6')}><PlaceRoundedIcon sx={{ fontSize: 28, marginRight: '10px' }} /> Gat No 12, Patilchowk, Vetalnager, Daund, 413801</h4>
                </div>
            </div>

            <div aria-label='Right-Img' className='col-span-2 flex items-center justify-end'>
                <img src={servicesImg} alt="illustration img" className='h-96 w-96' />
                {/* <img src="./brand-logo.png" alt="brandLogo" className='h-96 w-96' /> */}

            </div>
        </div>
    )
}

export default About1Head;