import React, { useState } from 'react'
import {motion} from "framer-motion"
const styles={
  webkitLineClamp:4,
  webkitBoxOrient:"vertical",
  overflow:"hidden",
  display:"-webkit-box",
 
}
export default function AboutUs() {
 const [isOpen,setIsOpen]=useState(true)
 const maxCharacters=300;
 const paragraph= `Green fusion energy resources & technology is a company that specializes in providing and installing 
solar system for both commercial and residential purposes. As a solar company, our mission is to 
develop sustainable energy solutions that reduce carbon footprints, saves energy costs and provide 
long-term value to our numerous customers.
It is true that the awareness for solar system is becoming increasingly important as more people 
become aware of the negative effect of fossil fuel on our environment. The cost of generating electricity 
from solar energy is decreasing, making it a more affordable option. Since the sun provides heat and 
light constantly, solar energy is considered a renewable energy source and an alternative to non 
renewable sources. As such, it has become a popular option for individuals and businesses looking to 
transit to clean energy.
There are enormous benefits when choosing a reputable solar company like Green Fusion Energy 
Resources & Technology, ranging from our standard quality of installations and equipment, and our 
customer service relationship. We offer high efficient quality products manufactured by reputable 
brands and we also customize as well as professional installation service to suit our clients. We also 
provide ongoing maintenance and monitoring services to ensure that your system is always operating at 
optimal levels. Moreso, Green Fusion Energy Resources & Technology has a prompt commitment to 
customer service, ensuring that clients are carried along before, during and after installation to get 
prompt assistance when the need arises. This includes providing accurate quotes, clear communication 
during the installation process, and responsive customer support throughout the span of the system. 
The role of Green Fusion Energy Resources & Technology cannot be over emphasized in helping 
individuals and business transition to cleaner and more sustainable cheaper sources of energy. With our 
dedication and commitment to high quality products, professional installation and maintenance service, 
and excellent customer support, we are reliable when making a choice to switch to renewable solar 
power system.`
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
