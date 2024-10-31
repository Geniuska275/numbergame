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




import Benin from "./Benin.jpg";
import Benina from "./Benina.jpg";
import Benin1 from "./Benin1.jpg";
import Benin2 from "./Benin2.jpg";

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
    // },
    // { id:3,
    //   images:[main20,main1,main2,main3,main4,main5],
    //   desc: "2.5kva/12volts Inverter Solar system",
    //   powers: " 8 LED Lights,2 Fans,1 TV ,1 Decoder and 1 laptop"
    // },
    // { id:4,
    //   images:[main20,main1,main2,main3,main4,main5],
    //   desc: "2.5kva/24Volts Inverter Solar system",
    //   powers: "10 LED Lights,3 Fans,2 TVs ,1 Home Theatre,1 Decoder, 1 fridge,Washing Machine and 1 laptop."
    // },
    { id:5,
      images:[main3,main3a],
      desc: "3.5kva/ 24Volts Inverter Solar system",
      powers: ""
    },
    { id:6,
      images:[lithium1,lithium1a],
      desc: "3.5kva/ 24Volts  Lithium Inverter Solar system",
      powers: ""
    },
    { id:9,
      images:[main5a,main5a1,main5a2,main5a3],
      desc: "5kva/48V Inverter Solar system",
      powers: ""
    },
    { id:7,
      images:[main10a,main10b,main10c,main10d],
      desc: "10kva/48V Inverter Solar system",
      powers: ""
    },
    { id:1,
      images:[main20k,main20ka,main20kb,main20kc,main20kd,main20i,main20j,main20h,main20l ],
      desc: "20kva / 96V Solar system Installation",
      powers: ""
    },
    { id:8,
      images:[ Benina,Benin,Benin1,Benin2],
      desc: "Benin Owina River Basin 40Kva/192V Solar System",
      powers: ""
    },
    { id:9,
      images:[main60,a60,b60,c60],
      desc: "60kva/120V Inverter Solar system",
      powers: ""
    },
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
