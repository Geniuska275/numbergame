import React from 'react'

function Statistics() {
  return (
    <div className='bg-white flex justify-around p-5 mb-[100px] items-center shadow-lg'>
      <div className='flex gap-2 font-[lato] '>
        <h1 className='font-bold text-3xl text-[#37CA2A]'> 5K+</h1>
        <p className='text-[#4A4E55]'>Happy <br></br>Clients</p>
      </div>
      <div className='flex gap-2'>
        <h1 className='font-bold text-3xl text-[#37CA2A]'> 100+</h1>
        <p className='text-[#4A4E55]'> Technical<br></br> Staff</p>
      </div>
      <div className='flex gap-2'>
        <h1 className='font-bold text-3xl text-[#37CA2A]'> 5K+</h1>
        <p className='text-[#4A4E55]'>Happy <br></br> Clients</p>
      </div>
      <div className='flex gap-2'>
        <h1 className='font-bold text-3xl text-[#37CA2A]'> 300K+</h1>
        <p className='text-[#4A4E55]'>Our <br></br> Green Solutions</p>
      </div>

    </div>
  )
}

export default Statistics