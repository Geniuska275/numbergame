import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import { MdArrowOutward } from "react-icons/md";
export default function Services() {
  return (
    <div>

      <Banner text="Services"/>
      <div className='bg-white shadow-lg w-full p-2
           '></div>
           <div className='services'>
           <Service text="CCTV Camera Installation"/>
           <Service text="Solar System Installation"/>
           <Service text="Electric  Fencing"/>
           <Service text="House Wiring"/>
           <Service text="Solar Training Classes"/>

           </div>
    </div>
  )
}
