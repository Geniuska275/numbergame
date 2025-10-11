import React, { useRef, useState } from 'react'
import Banner from '../components/Banner'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import {motion} from "framer-motion"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import logo from "./Glogo.jpeg"
function Contact() {
  const [name,setName]=useState("")
  const [lastname,setLastName]=useState("")

  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  
   const [loading,setLoading]=useState(true)
   useEffect(()=>{
     setTimeout(()=>{
       setLoading(false)
     },4000)
   },[])
  const templateParams={
    from_name:name,
    from_email:email,
    to_name:"GreenFusion",
    subject:"Contact GreenFusion",
    message:message,

  }
  const form = useRef();
  const sendEmail = (e) => {
    const public_key="LP_gdQVqVkKCNgmIL"
    e.preventDefault();

    emailjs
      .send('service_zvdl20p', 'template_fva1ypj', 
        templateParams,
        public_key
      )
      .then(
        () => {
          toast.success("Email Sent to GREENFUSION")
          setName(" ")
          setEmail(" ")
          setMessage(" ")
          setLastName(" ")
        },
        (error) => {
          toast.error("Email Not Sent to GREENFUSION")
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <div>

{/* {
            loading &&

           <div className='loader'>
            <div className='flex  justify-center items-center mt-[300px]'>
              <div className='flex items-center justify-center w-[80px] h-[80px] rounded-full border'>
                <img src={logo} className='w-[70px] h-[70px] rounded-full'/>
             </div>
            </div>
         </div>
          }
      <Banner text="Contact"/>
      <ToastContainer className="mt-[80px]" />
      <div className='bg-white shadow-lg w-full p-2
           '></div>
     <div className='Form'>
      <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='push'>
        <h2 className='font-[lato] font-bold text-md mb-2'>Contact Us </h2>
        <h1 className='font-bold text-2xl text-[#4A4E55] font-[lato]'>
          Head Office</h1>
          <p className='text-sm text-[#4A4E55]'>  3, Eguadase Street,<br></br> opposite James watt junction,
                <br></br> off Akpakpava road,<br></br> Benin City, <br></br>Edo State.
                </p>
                  <div className='flex gap-2 mt-2 mb-2 items-center'>
                  <a href='tel:+2348075362652'>
                    <FaPhone className='text-xl' />

                    </a>
                   <a  href="tel:+2348075362652" className='text-2xl w-[200px]'>+234 8075362652</a>
                  </div>
        <p className='font-bold text-2xl text-[#4A4E55] font-[lato] mb-3'>Follow Our Social Media</p>
        <div className='flex justify-between items-center'>
        <a href='https://Facebook.com/GFESTECH'>
               <FaFacebook className='text-2xl hover:bg-blue' />
              </a>
              <a href='https://www.instagram.com/p/DBd6zy-tGg-/?igsh=MTJmMTd5aGZqaGRoZQ=='>
              <FaInstagram className='text-2xl' />
              </a>
        <a href="https://x.com/Greenfusio74939">
        <BsTwitterX className='text-3xl' />
        </a>
        
        </div>
      </motion.div>
      <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className=' h-[300px] w-[400px] '>

        <form  ref={form} onSubmit={sendEmail}>
          <div className='grid grid-cols-2 gap-5 for'> 
          <input
           value={name}
          onChange={(e)=>setName(e.target.value)}
           type="text"
           name="FirstName"
           placeholder='First Name'
          className='border border-gray-400 py-1 px-2 rounded' required />
          <input 
          value={lastname}
          onChange={(e)=>setLastName(e.target.value)}
          type="text" name="LastName" placeholder='Last Name'  className='border border-gray-400 py-1 px-2 rounded' required/> 
          </div>
          <div className='mt-5'>

          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="text"  name="Email"placeholder='Email'  className=' w-full border border-gray-400 py-1 px-2 rounded' required /> 
          <textarea
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
           placeholder='Message' name="Message"  className=' w-full  mt-6 border border-gray-400 py-1 px-2 rounded'required />
          </div>
         
         <button className="bg-[#37CA2A] mt-2 rounded-md 
           font-[lato] px-6 py-2 text-white shadow hover:bg-[#37CA3A] duration-500">GET IN TOUCH</button>
       
        
        </form>
      </motion.div>







     </div> */}
    </div>
  )
}

export default Contact