import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimony from './Testimony';
function Testimonials() {

    var settings = {
  
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        
        dots:true,
        infinite: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              dots:true
             
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
    const Testimonials=[
        {
            name:"Mr. Monday Ehiorobo",
            product:"Beta Life Box",
            testimony:"lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            name:"Mr. Monday Eboh",
            product:"1kva",
            testimony:"lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            name:"Dr. John Adebayo",
            product:"2.5kva/24V",
            testimony:"lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            name:"Engr. Peter Idugboe",
            product:"3.5kva/24V",
            testimony:"lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            name:"Mr. Ovie Whiskey",
            product:"5kva/48V",
            testimony:"lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            name:"Mrs Beatrice Osaghade",
            product:"20kva/96V",
            testimony:"lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            name:"Mrs Blessing Omafor Solomon",
            product:"10kva/48V",
            testimony:"lorem ipsum dolor sit amet, consectetur adipiscing"
        },
       
    ]
  return (
    <div className='p-[60px]'>
        <h1 className='font-bold font-[lato] text-center text-2xl mb-4 text-[#4A4E55]'>Testimonials</h1>
      <Slider {...settings}>
    {Testimonials.map((testimony)=><Testimony data={testimony}/>)}

      </Slider>

    </div>
  )
}

export default Testimonials