import React, { useState } from 'react'
import {motion} from "framer-motion"
const styles={
  webkitLineClamp:4,
  webkitBoxOrient:"vertical",
  overflow:"hidden",
  display:"-webkit-box",
 
}
export default function AboutUs() {
 const [isOpen,setIsOpen]=useState(false)
 const maxCharacters=300;
 const paragraph= ""
 const text= isOpen ?paragraph.substring(0, maxCharacters) + "...": paragraph;

  return (
    <div className='About flex justify-around  p-[20px]'> 
        <img  src='https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0='
         className=' size w-[500px] h-[380px] rounded-lg shadow-lg'
        
        /> 
        <motion.div 
                     whileInView={{opacity:1,y:0}}
                     initial={{opacity:0,y:100}}
                     transition={{duration:0.5}}
           className={` sizes p-5 bg-[#f3fef9] rounded shadow `}>
          <h1 className='text-2xl font-bold font-[lato] text-[#4A4E55] mb-2'>About Us</h1>
          <p className='text-sm'>
            {text}
          </p>
          <a href="#" onClick={()=>setIsOpen(!isOpen)}> 
         <button className="bg-[#37CA3A] rounded-md 
           font-[lato] mt-2 px-6 py-2 text-black shadow-lg hover:bg-[#37CA3A] hover:text-white duration-500">{!isOpen ? "Read Less...":"Read More"}</button>
         </a>
        </motion.div>
    </div>
  )
}
