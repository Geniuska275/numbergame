import React from 'react'
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
function Service({text, paragraph}) {
  return (
    <div className='border border-black rounded shadow-md p-[20px] w-[300px] h-[440px] mb-3 mr-3'>
        <div className='rounded-full w-8 h-8 flex justify-center items-center bg-[#37CA2A]'>
        <MdOutlineEnergySavingsLeaf />
        </div>
        <h1 className='font-bold font-[lato] text-2xl mt-2 mb-2 mt-4'>{text}</h1>
        <p className='font-bold font-[lato] text-[#4A4E55] text-sm mb-2'>{paragraph}</p>
    </div>
  )
}

export default Service