import React, { useState } from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import image1 from "./standingfan.jpeg"
import image2 from "./standingfans.jpeg"

import image3 from "./tablefan.jpeg"
import image4 from "./solar.jpeg"
import image5 from "./box.jpeg"
import logo from "./Glogo.jpeg"
import { useEffect } from 'react'

export default function Products() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  const [products,setProducts]=useState([
    {
      images:image2,
      name:"Available",
      description:"Beta Life Box",
      price:""
    },
    {
    images:image1,
    name:"Available",
    description:"18 inch Solar Standing Fan",
    price:""
  },
  {
    images:image3,
    name:"Available",
    description:"18 inch Solar Standing Fan",
    price:""
  },
  {
    images:image4,
    name:"Available",
    description:"Solar Mini Kit",
    price:""
  },
  {
    images:image5,
    name:"Available",
    description:"Desktop Solar Fan",
    price:""
  }

  ])
  return (
    <div className='content'>
       {
            loading &&

           <div className='loader'>
            <div className='flex  justify-center items-center mt-[300px]'>
              <div className='flex items-center justify-center w-[80px] h-[80px] rounded-full border'>
                <img src={logo} className='w-[70px] h-[70px] rounded-full'/>
             </div>
            </div>
         </div>
          }
      <Banner text="Products"/>
      <div className='bg-white shadow-lg w-full p-2
           '></div>
           <div className='Products'>
           {products.slice(0,4).map((product,index)=>(

             <Product key={index} images={product.images} name={product.name} description={product.description} price={product.price}/>
            ))}
            </div>
            <div className='Products'>
           {products.slice(4,8).map((product,index)=>(

             <Product key={index} images={product.images} name={product.name} description={product.description} price={product.price}/>
            ))}
            </div>
           
           
    </div>
  )
}
