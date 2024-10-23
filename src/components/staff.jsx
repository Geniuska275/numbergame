import React from 'react'

function Staff({staff}) {
  return (
    <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={staff.image} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>{staff.name}</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 text-center mt-2'>{staff.role}</p>
    </div>
  )
}

export default Staff