import React from 'react'
import video from "./solar.mp4"
function Hero() {
  return (
    <div className='Hero'>

        <video  src={video} muted autoPlay loop className='video' />
        <div className='bg-overlay'></div>
        <div className='display'>
            <h1 className='font-bold text-[#37CA2A] text-5xl font-[lato] mb-3'>
                Solar Energy</h1>
            <h1 className='font-bold text-[#ffffff] text-2xl font-[lato] mb-1'>            
            Save The Planet Using Renewable Energy.</h1>
            <h4 className='p-1 bg-[#37CA2A] w-[160px] rounded-full'></h4>

        </div>
    </div>
  )
}

export default Hero