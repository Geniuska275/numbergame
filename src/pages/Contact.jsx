import React from 'react'
import Banner from '../components/Banner'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";


function Contact() {
  return (
    <div>
      <Banner text="Contact"/>
      <div className='bg-white shadow-lg w-full p-2
           '></div>
     <div className='Form'>
      <div>
        <h2 className='font-[lato] font-bold text-md mb-2'>Contact Us </h2>
        <h1 className='font-bold text-2xl text-[#4A4E55] font-[lato]'>
          Head Office</h1>
          <p className='text-sm text-[#4A4E55]'>  3, Eguadase Street,<br></br> opposite James watt junction,
                <br></br> off Akpakpava road,<br></br> Benin City, <br></br>Edo State.
                </p>
                  <div className='flex gap-2 mt-2 mb-2 items-center'>
                  <FaPhone className='text-xl' />
                   <h1 className='text-2xl'>(+234) 9011192901</h1>
                  </div>
        <p className='font-bold text-2xl text-[#4A4E55] font-[lato] mb-3'>Follow Our Social Media</p>
        <div className='flex justify-between items-center'>
        <FaFacebook className='text-3xl' />
        <BsTwitterX className='text-3xl' />
        <FaInstagram className='text-3xl' />
        <FaLinkedin  className='text-3xl'/>
        </div>
      </div>
      <div className=' h-[300px] w-[400px] '>

        <form>
          <div className='grid grid-cols-2 gap-5 for'> 
          <input type="text" placeholder='First Name' className='border border-gray-400 py-1 px-2 rounded' />
          <input type="text" placeholder='Last Name'  className='border border-gray-400 py-1 px-2 rounded' /> 
          </div>
          <div className='mt-5'>

          <input type="text" placeholder='Email'  className=' w-full border border-gray-400 py-1 px-2 rounded' /> 
          <textarea placeholder='Message'  className=' w-full  mt-6 border border-gray-400 py-1 px-2 rounded' />
          </div>
          <a href="https://wa.me/+2347032188798"> 
         <button className="bg-[#37CA2A] mt-2 rounded-md 
           font-[lato] px-6 py-2 text-white shadow hover:bg-[#37CA3A] duration-500">GET IN TOUCH</button>
         </a>
        
        </form>
      </div>







     </div>
    </div>
  )
}

export default Contact