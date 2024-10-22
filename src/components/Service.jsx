import React from 'react'
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
function Service() {
  return (
    <div className='border border-black rounded p-[20px] w-[300px] h-[200px] mb-3'>
        <div className='rounded-full w-8 h-8 flex justify-center items-center bg-[#37CA2A]'>
        <MdOutlineEnergySavingsLeaf />
        </div>
        <h1 className='font-bold font-[lato] text-2xl mt-2 mb-2'>Energy Consultation</h1>
        <p className='font-bold font-[lato] text-[#4A4E55] text-sm mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam cum vero architecto eveniet,</p>
    </div>
  )
}

export default Service