import React from 'react'
import { Link } from 'react-router-dom'

function Installation({data}) {
  return (
    <div className='shadow-md w-[300px]  h-[400px] mb-4'>
     <img src={data.images[0]} className='h-[240px] w-full'/>
     <h1 className='text-center font-bold font-[lato] m-1'>{data.desc}</h1>
     <p className='text-[#4A4E55] text-sm font-[lato] ml-3'>Powers: {data.powers}</p>
     <div className='text-center mt-4'>
    <Link to={`/Installation/${data.id}`} >
    <button className='text-center font-bold font-[lato] m-auto px-5 py-2 bg-[#37CA2A] rounded shadow-md hover:text-white'>
        View Installation
     </button>
    </Link>
     </div>
    </div>
  )
}

export default Installation