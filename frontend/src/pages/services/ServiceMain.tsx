import React from 'react'
import Service1head from './Service1head'
import Specializedservices from './Specializedservices'
import OtherServices from './OtherServices'

function ServiceMain() {
  return (
    <div className=' mt-24'>
      <Service1head/>
      <Specializedservices />
      <OtherServices />
    </div>
  )
}

export default ServiceMain
