import React, { useRef,useState } from 'react'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Stats from '../components/Stats'
import Service from '../components/Service'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import Team from '../components/team'
import Swiper from '../components/swiper'
import Swipers from '../components/swiper'
import Testimonials from '../components/Testimonials'
import Trainings from '../components/Trainings'
import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify';
import {motion} from "framer-motion"
import 'react-toastify/dist/ReactToastify.css';

export default function Homepage() {
  const [name,setName]=useState("")
  const [lastname,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
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
          toast.success("Feedback Sent to GREENFUSION")
          setName(" ")
          setEmail(" ")
          setMessage(" ")
          setLastName(" ")
        },
        (error) => {
          toast.error("Feedback Not Sent to GREENFUSION")
          console.log('FAILED...', error);
        },
      );
  };

  
  return (
    <div>
      <ToastContainer/>
        <Hero/>
        <Statistics/>
         <AboutUs/>
             <h1 className='text-center font-bold text-3xl text-[#4A4E55] mt-4'> Trainings</h1>
             <Trainings text="Edojobs Training"/>
        <div className='flex justify-between items-center mt-4 '>
            <h3 className='text-2xl font-extrabold font-[lato] ml-4'>Our Services</h3>
           <Link to="/Services">
            <button className='  hover:text-white mr-4 flex gap-2 items-center rounded bg-[#37CA2A] px-2 py-2 shaodow'>
              View All 
              <MdArrowOutward />

            </button>
           </Link>
           </div>
           <div className='services'>
           <Service text="CCTV Camera Installation" paragraph="Professional technicians from the company handle the actual installation, ensuring that all cameras are correctly mounted and positioned for optimal coverage. They also run the necessary cabling or set up wireless networks to ensure smooth communication between the cameras and the recording devices. Proper camera angles, lighting considerations, and concealment (if necessary) are also handled during installation."/>
           <Service text="Solar System Installation" paragraph=" Professional technicians carry out the actual installation, which includes securely mounting the solar panels on the roof or ground, connecting the panels to the inverter, and wiring the system to the property’s electrical grid. Safety is a priority during installation, and the company ensures that all components are installed correctly and adhere to industry standards."/>
           <Service text="Electric  Fencing" paragraph="Once the design and materials are approved, experienced technicians handle the installation process. This involves:

Preparing the Site: Clearing vegetation, leveling the ground, and marking property lines.
Setting Fence Posts: Posts are installed securely, typically in concrete, to ensure stability and longevity.
Installing Fence Panels: The panels or pickets are then attached to the posts, ensuring proper alignment and structural integrity."/>
           <Service text="House Wiring" paragraph="The actual wiring installation is carried out by licensed electricians who follow industry best practices and safety protocols. The process involves:

Running Wires: Installing electrical cables throughout the house.
Installing Breaker Panels: The breaker or fuse panel is the control center for the home’s electrical system.
 
Grounding and Safety Systems: Proper grounding is essential to prevent electrical shocks and protect the home’s electrical system."/>
           <Service text="Solar Training Classes" paragraph="The solar training classes are developed to provide both theoretical knowledge and hands-on skills essential for a career in the solar industry. The curriculum typically covers key areas such as:

Solar Energy Fundamentals,
System Design and Planning, installation and wiring."/>

           </div>
           
        <Team/>
    
        <Testimonials/>
            <h1 className='text-center font-bold text-2xl text-[#4A4E55] mt-2 mb-3'>Give Us a Feedback</h1>
          <div className='flex justify-center items-center'>
          
        <motion.div
                    whileInView={{opacity:1,y:0}}
                    initial={{opacity:0,y:50}}
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
          placeholder='Feedback' name="Message"  className=' w-full  mt-6 border border-gray-400 py-1 px-2 rounded'required />
          </div>
         
         <button className="bg-[#37CA2A] mt-2 rounded-md 
           font-[lato] px-6 py-2 text-white shadow hover:bg-[#37CA3A] duration-500">SEND FEEDBACK</button>
       
        
        </form>
      </motion.div>
           </div>
        
       
    </div>
  )
}
