import React, { useState } from 'react'

const styles={
  webkitLineClamp:4,
  webkitBoxOrient:"vertical",
  overflow:"hidden",
  display:"-webkit-box",
 
}
export default function AboutUs() {
 const [isOpen,setIsOpen]=useState(false)
 const maxCharacters=300;
 const paragraph= "The sun rises over the tranquil lake, casting a warm glow across the water. A gentle breeze rustles through the leaves of nearby trees, creating a soothing melody. A family of ducks swims playfully in the distance, their quacks echoing through the air. Children's laughter carries on the wind as they chase each other around the lake's edge. A lone fisherman sits patiently, waiting for his catch. The sky above is painted with hues of blue and orange, a perfect reflection of nature's beauty. As the morning progresses, the world awakens from its slumber, bringing life and energy to this serene setting.";
 const text= isOpen ?paragraph.substring(0, maxCharacters) + "...": paragraph;

  return (
    <div className='About flex justify-around  p-[20px]'> 
        <img src='https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0='
         className=' size w-[500px] h-[380px] rounded-lg shadow-lg'
        
        /> 
        <div className={` size p-5 w-[500px] bg-[#f3fef9] rounded shadow `}>
          <h1 className='text-2xl font-bold font-[lato] text-[#4A4E55] mb-2'>About Us</h1>
          <p className='text-sm'>
            {text}
          </p>
          <a href="#" onClick={()=>setIsOpen(!isOpen)}> 
         <button className="bg-[#37CA3A] rounded-md 
           font-[lato] mt-2 px-6 py-2 text-black shadow-lg hover:bg-[#37CA3A] hover:text-white duration-500">{!isOpen ? "Read Less...":"Read More"}</button>
         </a>
        </div>
    </div>
  )
}
