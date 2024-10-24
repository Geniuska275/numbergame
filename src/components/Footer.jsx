import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LiaCopyrightSolid } from "react-icons/lia";
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
                <Link
                 to="/About-Us">
                    <h2 className='text-sm text-[#4A4E55] mb-2 hover:text-[#37CA2A]'>About us</h2>
                </Link>
                <Link to="/Products">         
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Products</h2>
                </Link>
                <Link to="/Services">        
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Services</h2>
                </Link>
                <a href='/'>
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Our Team</h2>
                </a>
                
            </div>
            <div className='space' >
            <h1 className='font-extrabold font-[lato] mb-2'> Follow Us</h1>
            <div className='flex justify-between gap-2 items-center mb-[90px]'>
              <a href='https://Facebook.com/GFESTECH'>
               <FaFacebook className='text-2xl hover:bg-blue' />
              </a>
              <a href="">
            <BsTwitterX className='text-2xl' />
              </a>
              <a href='https://www.instagram.com/p/DBd6zy-tGg-/?igsh=MTJmMTd5aGZqaGRoZQ=='>
              <FaInstagram className='text-2xl' />
              </a>
              </div>        
            </div>
        </div>
        <div className='flex items-center justify-center gap-1'>
        <LiaCopyrightSolid />

        <h1 className='m-5 text-center'>Copyright 2024 GreenFusion Energy.</h1>
        </div>



    </div>
  )
}
