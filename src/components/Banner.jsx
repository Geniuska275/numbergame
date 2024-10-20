import React from 'react'

function Banner({text}) {

  return (
    <div className='Contact element shadow-lg mb-7'>
        <div className=''>

        <h1 className='font-bold text-white text-4xl mb-2'>{text}</h1>
        <p className='p-[3px] bg-[#37CA2A] w-[150px] rounded-full'></p>
        </div>
       

    </div>
  )
}

export default Banner  