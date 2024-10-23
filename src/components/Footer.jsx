import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='footer bg-[#EDF2EA]'>
        <div className='Foot border-b '>
              <div className='space'>
               <img src="" />
              <div>
                <h1 className='font-extrabold font-[lato] mb-2'>Head Office</h1>
                <p className='text-sm text-[#4A4E55]'>  3, Eguadase Street,<br></br> opposite James watt junction,
                <br></br> off Akpakpava road,<br></br> Benin City, <br></br>Edo State.
                </p>
              </div>
            </div>
            <div className='space'>
                <div>
                <h1 className='font-extrabold font-[lato] mb-2'>Warri Branch</h1>
                <p  className='text-sm text-[#4A4E55] mb-[20px]'> 28, Effurum Sapele Road,<br></br> opposite unity bank,
                <br></br> before Enerhen junction ,<br></br>warri Delta State.
                </p>
                </div>
              </div>
            <div className='space' >
                <h1 className='font-extrabold font-[lato] mb-2'> Company</h1>
                <a href='/About-Us'>
                    <h2 className='text-sm text-[#4A4E55] mb-2 hover:text-[#37CA2A]'>About us</h2>
                </a>
                <a href='/Products'>
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Products</h2>
                </a>
                <a href='/Services'>
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Services</h2>
                </a>
                <a href='/'>
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Our Team</h2>
                </a>
                
            </div>
            <div className='space' >
            <h1 className='font-extrabold font-[lato] mb-2'> Social Media</h1>
            <div className='flex justify-between gap-4 items-center mb-[90px]'>
            <FaFacebook className='text-2xl' />
            <BsTwitterX className='text-2xl' />
          <FaInstagram className='text-2xl' />
           <FaLinkedin  className='text-2xl'/>
        </div>
                
            </div>


        </div>
        <h1 className='m-5 text-center'>copyright GreenFusion Energy.</h1>



    </div>
  )
}
