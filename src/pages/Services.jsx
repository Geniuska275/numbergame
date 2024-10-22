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
           <Service/>
           <Service/>
           <Service/>
           </div>
    </div>
  )
}
