import React, { useState } from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import { MdArrowOutward } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main20 from "./main20.jpg";
import main1 from "./main1.jpg";
import main2 from "./main2.jpg";
import main3 from "./main3.jpg";
import main4 from "./main4.jpg";
import main5 from "./main5.jpg";
import Installation from '../components/installation';

import Slider from "react-slick";



export default function Services() {
  var settings = {
  
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
     dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [installations,setInstallations]=useState([
    { id:1,
      images:[main20,main1,main2,main3,main4,main5],
      desc: "20kva Solar system Installation",
      powers: ""
    },
    { id:2,
      images:[main20,main1,main2,main3,main4,main5],
      desc: "1kva / 12volts Inverter Solar system",
      powers: " 6 LED Lights,2 Fans,1 TV ,1 Decoder and Home Theater."
    },
    { id:3,
      images:[main20,main1,main2,main3,main4,main5],
      desc: "2.5kva/12volts Inverter Solar system",
      powers: " 8 LED Lights,2 Fans,1 TV ,1 Decoder and 1 laptop"
    },
    { id:4,
      images:[main20,main1,main2,main3,main4,main5],
      desc: "2.5kva/24Volts Inverter Solar system",
      powers: "10 LED Lights,3 Fans,2 TVs ,1 Home Theatre,1 Decoder, 1 fridge,Washing Machine and 1 laptop."
    },
    { id:5,
      images:[main20,main1,main2,main3,main4,main5],
      desc: "3.5kva/ 24Volts Inverter Solar system",
      powers: ""
    },
  ])
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
           <h1 className='font-bold font-[lato] text-center text-2xl'>Installations</h1>
           <div className='flex justify-between p-[20px]'> 

           </div>
           <div className='p-[40px]'>

           <Slider {...settings}>
         

            {installations.map((install)=><Installation data={install}/>)}
            
           
           </Slider>
           </div>
     
          


    </div>
  )
}
