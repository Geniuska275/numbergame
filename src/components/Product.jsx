import React from 'react'

function Product({images, name, description}) {
  return (
    <div className='w-[300px] shadow-lg p-[20px] rounded'>
        <img src={images} className='w-full h-[200px] contain mt-2'/>
        <h1 className='font-extrabold font-[lato]  text-2xl mb-2'> {description}</h1>
        <p className='font-bold font-[lato] text-[#4A4E55] text-sm mb-2'>{name}</p>
         
        <a href='tel:+2348075362652'>
          <button className="bg-[#37CA2A]
          md: rounded-md w-full
          font-[lato] px-6 py-2 text-white shadow-lg hover:bg-[#37CA3A] duration-500">SHOP NOW</button>
        
          </a> 
    </div>
  )
}

export default Product