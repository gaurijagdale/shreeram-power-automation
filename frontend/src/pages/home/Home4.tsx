import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"

const clients = [
  "Maharashtra State Electricity Transmission Company Limited",
  "Walchandnagar Industries Ltd., Walchandnagar, Indapur",
  "S.S. Engineer, Bhosari, Pune",
  "NVR Solar Power Plant, Mograle, Phaltan",
  "Sunfresh Agro Ltd., Shrirampur, Ahmednagar",
  "Daund Sugar Pvt. Ltd., Alegaon, Daund",
  "Ambalika Sugar Pvt. Ltd., Karjat, Ahmednagar",
  "Pushpdanteshwar Sugar Pvt. Ltd.",
  "Malegaon Sahakari Sakhar Karkhana Ltd., Malegaon, Baramati",
  "Someshwar Sahakari Sakhar Karkhana Ltd., Someshwar, Baramati",
  "Chatrapati Sahakari Sakhar Karkhana Ltd., Bhawaninagar, Baramati",
  "Baramati Agro Pvt. Ltd., Baramati",
  "Shreenath Mhaskoba Sakhar Karkhana, Rahu, Daund",
  "Raosaheb Pawar S.S.K. Ltd., Navara, Shirur",
  "Swaraj Agro Ltd., Phaltan, Satara",
  "Sharayu Sugar Pvt. Ltd., Phaltan, Satara",
  "Cane Agro Pvt. Ltd., Satara",
  "Green Power & Sugar Pvt. Ltd., Satara",
  "Shrigonda S.S.K. Ltd., Shrigonda, Ahmednagar",
  "Kukadi S.S.K. Ltd., Kukadi, Ahmednagar",
  "Bhairavnath Sugar Pvt. Ltd., Alegaon, Malshiras, Solapur",
  "Shankarrao Kale S.S.K. Ltd., Pandharpur, Solapur",
  "Vitthal S.S.K. Ltd., Venunagar, Pandharpur, Solapur",
  "Siddheswar Sugar Pvt. Ltd., Solapur",
  "Fabtech Sugar Pvt. Ltd., Solapur",
  "Gokul Sugar Pvt. Ltd., Dhotri, Solapur",
  "Shree Shree Sugar Pvt. Ltd., Malshiras, Solapur",
  "Govind Agro Pvt. Ltd., Karmala, Solapur",
  "Yedeshwari S.S.K. Ltd., Barshi",
  "NSL Jay Mahesh Sugar Pvt. Ltd., Majalgaon, Beed",
  "Swami Samarth Sugar Pvt. Ltd., Akkalkot, Solapur",
  "Maharashtra Shetkari Sakhar Karkhana Ltd., Parli, Parbhani",
  "Karmayogi Shankarathana S.P.S.K. Ltd., Bijwadi, Indapur",
  "Nira-Bhima S.S.K. Ltd., Indapur",
  "Anuraj Sugar Pvt. Ltd., Yavat",
  "Bhairvanath Sugar Pvt. Ltd. (all Units, 1 to 4) JSPM Pune Group",
  "Volt-Age Infra Pvt. Ltd., Pune",
  "Ideas Engineers, Aurangabad",
  "Sona Alloys Pvt. Ltd., Lonand"
];

function Home4() {
  return (
    <div className='w-full px-32 py-12 '>

      <div className='w-full h-full px-12 py-8 flex flex-col items-center justify-center border border-Dblue rounded-2xl space-y-5'>
        <div id='title' className=''>
          <h2 className='text-3xl text-Dblue font-semibold tracking-wider'>Our top clients</h2>
        </div>

        <div className='w-full overflow-y-scroll max-h-96'>
          {clients.map((client, index) => (
            <div key={index} className={`w-full flex items-center justify-start ${index % 2 === 0 ? 'bg-Lblue' : 'bg-white'} p-3 space-x-3`}>
              <CheckCircleOutlineIcon />
              <p>{client}</p>
            </div>
          ))}
        </div>

      </div>

    </div>

  )
}

export default Home4
