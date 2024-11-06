import React from 'react'
import img1 from "./trains1.jpg";
import img2 from "./trains2.jpg";
import img3 from "./trains3.jpg";
import img4 from "./trains4.jpg";
import img5 from "./trains5.jpg";
import img6 from "./tra1.jpg";
import img7 from "./tra2.jpg";
import img8 from "./tra3.jpg";
import img9 from "./tra4.jpg";
import img10 from "./tra5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trainings({text}) {
    const images=[img1,img2,img3,img4,img5,img6,img7,img8,img9];
    var settings = {
  
        speed: 200,
        slidesToShow: 3,
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
  return (
    <div className='p-[40px]'>
        <h1 className='text-[#4A4E55] text-center mt-2 mb-2'>{text}</h1>
         <Slider {...settings}>
        {images.map(image=>(
         <img src={image} className='h-[300px] w-[300px]'/>
         ))}
    

      </Slider>
    </div>
  )
}

export default Trainings