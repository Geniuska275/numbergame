import React from 'react'

function Staff({staff}) {
  return (
    <div className=' '>
        <img src={staff.image} className='w-[150px] h-[150px] rounded-full m-auto' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>{staff.name}</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 text-center mt-2'>{staff.role}</p>
    </div>
  )
}

export default Staff