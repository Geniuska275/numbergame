import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import { MdArrowOutward } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"
import main20 from "./main20.jpg";
import main10 from "./main10.jpg";
import main1 from "./main1.jpg";
import main2 from "./main2.jpg";

import main4 from "./main4.jpg";
import main5 from "./main5.jpg";
import a10 from "./10a.jpg";
import b10 from "./10b.jpg";
import c10 from "./10c.jpg";
import main60 from "./main60.jpg";
import main5k from "./main5k.jpg";
import main3 from "./main3a.jpg";
import main3a from "./main3a1.jpg";
import lithium1 from "./lithium3.jpg";
import lithium1a from "./lithium3a.jpg";

import a60 from "./60a.jpg";
import b60 from "./60b.jpg";
import c60 from "./60c.jpg";
import logo from "./Glogo.jpeg"
import west from "./west.jpg";

import west2 from "./west2.jpg";
import west3 from "./west3.jpg";
import west4 from "./west4.jpg";
import west5 from "./west5.jpg";
import west6 from "./west6.jpg";
import west7 from "./west7.jpg";
import west8 from "./west8.jpg";
import west9 from "./west9.jpg";
import west10 from "./west10.jpg";
import west11 from "./west11.jpg";
import west12 from "./west12.jpg";
import west13 from "./west13.jpg";
import west14 from "./west14.jpg";
import west15 from "./west15.jpg";
import west16 from "./west16.jpg";
import west17 from "./west17.jpg";
import west18 from "./west18.jpg";
import west19 from "./west19.jpg";
import west20 from "./west20.jpg";
import west21 from "./west21.jpg";
import a5 from "./5a.jpg";
import b5 from "./5b.jpg";
import c5 from "./5c.jpg";

import d5 from "./5d.jpg";
import e5 from "./5e.jpg";
import f5 from "./5f.jpg";

import g5 from "./5g.jpg";
import h5 from "./5h.jpg";

import main5a from "./main5a.jpg";
import main5a1 from "./main5a1.jpg";
import main5a2 from "./main5a2.jpg";
import main5a3 from "./main5a3.jpg";

import main10a from "./main10a.jpg";
import main10b from "./main10b.jpg";
import main10c from "./main10c.jpg";
import main10d from "./main10d.jpg";

import main20a from "./main20a.jpg";
import main20b from "./main20b.jpg";
import main20c from "./main20c.jpg";
import main20d from "./main20d.jpg";
import main20e from "./main20e.jpg";
import main20f from "./main20f.jpg";

import main20k from "./main20k.jpg";
import main20ka from "./main20ka.jpg";
import main20kb from "./main20kb.jpg";
import main20kc from "./main20kc.jpg";
import main20kd from "./main20kd.jpg";
import main20i from "./main20i.jpg";
import main20l from "./main20l.jpg";
import main20j from "./main20j.jpg";
import main20h from "./main20h.jpg";

import maink2 from "./maink2.jpg";
import maink2a from "./maink2a.jpg";

import maink1a from "./maink1a.jpeg";
import maink1b from "./maink1b.jpg";

import Benin from "./Benin.jpg";
import Benina from "./Benina.jpg";
import Benin1 from "./Benin1.jpg";
import Benin2 from "./Benin2.jpg";

import Beta from "./beta.jpg";
import Beta1 from "./beta1.jpg";
import Beta2 from "./beta2.jpg";

import Installation from '../components/installation';

import Slider from "react-slick";


const iconVariants=(duration)=>({
  initial:{x:-10},
  animate:{
    x:[10,-10],
    transition:{
       duration:duration,
       ease:"linear",
       repeat:Infinity,
       repeatType:"reverse"
    }
  }
 })

export default function Services() {
  const [loading,setLoading]=useState(true)
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
    // { id:2,
    //   images:[main10,main1,main2,main3,main4,main5],
    //   desc: "1kva / 12volts Inverter Solar system",
    //   powers: " 6 LED Lights,2 Fans,1 TV ,1 Decoder and Home Theater."
    { id:11,
      images:[Beta,Beta1,Beta2],
      desc: "Installation of 100 Beta Life Boxes across 100 primary schools in Edo State.",
      powers: "1 TV ,1 GoTV Decoder ,6 LED Lights and 1 Fan"
    },
    // },
     { id:3,
      images:[maink2a,maink2],
     desc: "2.5kva/12V Inverter Solar system",
     powers: " 10 LED Lights,3 Fans,2 TV ,1 Decoder ,1 Fridge 1 Washing Machine and 1 Laptop"
     },
    { id:4,
      images:[maink1a,maink1b],
      desc: "1kva/12V Inverter Solar system",
      powers: "10 LED Lights,3 Fans,2 TVs ,1 Home Theatre,1 Decoder, 1 fridge,Washing Machine and 1 laptop."
    },
    { id:5,
      images:[main3,main3a],
      desc: "3.5kva/ 24V Inverter Solar system",
      powers: "10 LED Lights,1 Home Theatre,1 Decoder ,1 Fridge ,1 Washing Machine,1 Laptop,1 freezer and 1 Pressing Iron."
    },
    { id:6,
      images:[lithium1,lithium1a],
      desc: "3.5kva/ 24V  Lithium Inverter Solar system",
      powers: "10 LED Lights,1 Home Theatre,1 Decoder ,1 Fridge ,1 Washing Machine,1 Laptop,1 freezer and 1 Pressing Iron."
    },
    { id:9,
      images:[main5a,main5a1,main5a2,main5a3],
      desc: "5kva/48V Inverter Solar system",
      powers: "15 LED Lights,4 Fans ,3 Tvs,1 Home Theatre,2 Decoders,1 fridge,1 Washing Machine,2 Laptops,1 Freezer,1 ,1 blender ,1 Inverter AC And Borehole"
     
    },
    { id:7,
      images:[main10a,main10c,main10d,main10b],
      desc: "10kva/48V Inverter Solar system",
      powers: "15 LED Lights,6 Fans ,4 Tvs,1 Home Theatre,2 Decoders,1 fridge,1 Washing Machine,4 Laptops,2 Freezer,1 blender ,1 Microwave, 1 Pressing Iron,1 Inverter AC And Borehole"
    
    },
    { id:1,
      images:[main20k,main20ka,main20kb,main20kc,main20kd,main20i,main20j,main20h,main20l ],
      desc: "20kva / 96V Solar system Installation",
     powers: "30 LED Lights,12 Fans ,8 Tvs,2 Home Theatre,4 Decoders,2 fridge,2 Washing Machine,8 Laptops,4 Freezer,2 blender ,2 Microwave, 2 Pressing Iron,2 Inverter And  2 Boreholes."
    },
    { id:8,
      images:[ Benina,Benin,Benin1,Benin2],
      desc: "Benin Owina River Basin 40Kva/192V Solar System",
      powers: ""
    },
    { id:12,
      images:[ west20,west,west2,west3,west4,west5,west6,west7,west8,west9,west10,west11,west12,west13,west14,west15,west16,west17,west18,west19,west20,west21],
      desc: "Wetland Banks Installation",
      
    },
    // { id:10,
    //   images:[main60,a60,b60,c60],
    //   desc: "60kva/120V Inverter Solar system",
    //   powers: ""
    // },
  ])

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <div className='content'>
   

        <div>

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
      <Banner text="Services"/>
      <div className='bg-white shadow-lg w-full p-2
           '></div>
           <motion.div
             variants={iconVariants(2.6)}
             initial="initial"
             animate="animate"
             className='services'>
           <Service text="Solar System Installation"
            paragraph="Professional technicians carry out the actual installation,
             which includes securely mounting the solar panels on the roof or ground,
              connecting the panels to the inverter, 
              and wiring the system to the property’s 
             electrical grid. Safety is a priority during installation, 
             and the company ensures that all components are installed
              correctly and adhere to industry standards."
              />
           <Service text="CCTV Camera Installation" paragraph="Professional 
           technicians from the company handle the actual installation,
            ensuring that all cameras are correctly mounted and positioned for optimal coverage.
             They also run the necessary cabling or set up wireless networks to ensure
              smooth communication between the
               cameras and the recording devices.
                Proper camera angles, lighting considerations,
             and concealment (if necessary) are also handled during
              installation."/>
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

           </motion.div>
          
           <div className='p-[40px]'>

           <h1 className='font-bold font-[lato] text-center text-[#4A4E55] text-2xl mb-4'>Installations</h1>
           <Slider {...settings}>

            {installations.map((install)=><Installation data={install}/>)}
            
           
           </Slider>
           </div>
     
          


    </div>

</div>
  )
}
