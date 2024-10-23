import React, { useState } from 'react'
import lawrence from "./lawrence.jpg";
import emmanuel from "./emmanuel.jpg";
import isaac from "./isaac.jpg";
import vincent from "./vincent.jpg";
import victory from "./victory.jpg";
import monday from "./monday.jpg";
import abraham from "./abraham.jpg";
import Staff from './staff';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Team() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
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
            role:"Head Research"
        },
        {
            name:"Osarenkhoe  Isaac",
            image:isaac,
            role:" "
        },
        {
            name:"Vincent  Ikpefa",
            image:vincent,
            role:" "
        },
    ])
  return (
    <div>
        <h1 className='text-center text-3xl font-bold mb-3 font-[lato]'>Our Team</h1>
        <Carousel
      swipeable={false}
      draggable={false}
     
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
  
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
     
    >
        {team.slice(0,4).map((staff)=><Staff staff={staff}/>)}
        </Carousel>
    </div>
  )
}

export default Team