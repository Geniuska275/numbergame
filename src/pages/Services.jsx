import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import { MdArrowOutward } from "react-icons/md";
export default function Services() {
  return (
    <div>

      <Banner text="Services"/>
      <div className='bg-white shadow-lg w-full p-2
           '></div>
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
    </div>
  )
}
