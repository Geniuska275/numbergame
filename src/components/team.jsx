import React, { useState } from 'react'
import lawrence from "./l.jpeg";
import emmanuel from "./emma.jpg";
import isaac from "./isaac1.jpg";
import vincent from "./v.jpeg";
import victory from "./vi.jpeg";
import monday from "./m.jpeg";
import abraham from "./AT.jpeg";
import Staff from './staff';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Team() {
  var settings = {
  
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    
    infinite: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
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

    
    const [team, setTeam]=useState([
        {
            name:" Lawrence Onaudhe",
            image:lawrence,
            role:"Head Administrator"
        },
        {
            name:" Ehigiamusoe Emmanuel",
            image:emmanuel,
            role:"Head Production and Installation"
        },
        {
            name:"Victory Iyoha",
            image:victory,
            role:"Head Training"
            },
        {
                name:"Monday Erhunwmunse",
                image:monday,
                role:"Head Research"
        },
        {
            name:"Atuba  Abraham",
            image:abraham,
            role:"Head Marketing"
        },
        {
            name:"Osarenkhoe  Isaac",
            image:isaac,
            role:" "
        },
        {
            name:"Vincent  Okpefa",
            image:vincent,
            role:" "
        },
    ])
  return (
    <div>
      <div className='p-[40px]'>

<h1 className='font-bold font-[lato] text-center text-2xl mb-4 text-[#4A4E55]'>Our Team</h1>
<Slider {...settings}>

 
        {team.map((staff)=><Staff staff={staff}/>)}

</Slider>
    </div>
    </div>
  )
}

export default Team