import React, { useState } from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import image1 from "./standingfan.jpeg"
import image2 from "./standingfans.jpeg"

import image3 from "./tablefan.jpeg"
import image4 from "./minikit.jpeg"
import image5 from "./betalife.jpeg"


export default function Products() {

  const [products,setProducts]=useState([{
    images:image1,
    name:"18 inch Solar Standing Fan",
    description:"18 inch Solar Standing Fan",
    price:""
  },
  {
    images:image2,
    name:"lorem_214523660",
    description:"Beta Life Box",
    price:""
  },
  {
    images:image3,
    name:"18 inch Solar Standing Fan",
    description:"18 inch Solar Standing Fan",
    price:""
  },
  {
    images:image4,
    name:"lorem_214523660",
    description:"Solar Mini Kit",
    price:""
  },
  {
    images:image5,
    name:"lorem_214523660",
    description:"Desktop Solar Fan",
    price:""
  }

  ])
  return (
    <div>
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
