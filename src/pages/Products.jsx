import React, { useState } from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'

export default function Products() {

  const [products,setProducts]=useState([{
    images:"https://st4.depositphotos.com/11085122/21452/i/450/depositphotos_214523660-stock-photo-two-young-technicians-mounting-heavy.jpg",
    name:"lorem_214523660",
    description:"lorem ipsum dolor sit amet, consectetur",
    price:""
  },
  {
    images:"https://st4.depositphotos.com/11085122/21452/i/450/depositphotos_214523660-stock-photo-two-young-technicians-mounting-heavy.jpg",
    name:"lorem_214523660",
    description:"lorem ipsum dolor sit amet, consectetur",
    price:""
  },
  {
    images:"https://st4.depositphotos.com/11085122/21452/i/450/depositphotos_214523660-stock-photo-two-young-technicians-mounting-heavy.jpg",
    name:"lorem_214523660",
    description:"lorem ipsum dolor sit amet, consectetur",
    price:""
  },
  {
    images:"https://st4.depositphotos.com/11085122/21452/i/450/depositphotos_214523660-stock-photo-two-young-technicians-mounting-heavy.jpg",
    name:"lorem_214523660",
    description:"lorem ipsum dolor sit amet, consectetur",
    price:""
  }

  ])
  return (
    <div>
      <Banner text="Products"/>
      <div className='bg-white shadow-lg w-full p-2
           '></div>
           <div className='Products'>
           {products.map((product,index)=>(

             <Product key={index} images={product.images} name={product.name} description={product.description} price={product.price}/>
            ))}
            </div>
            <div className='Products'>
           {products.map((product,index)=>(

             <Product key={index} images={product.images} name={product.name} description={product.description} price={product.price}/>
            ))}
            </div>
           <div className='Products'>
           {products.map((product,index)=>(

             <Product key={index} images={product.images} name={product.name} description={product.description} price={product.price}/>
            ))}
            </div>
           
    </div>
  )
}
