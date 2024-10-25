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
    const Testimonials=[
        {
            name:"Mr. Monday Ehiorobo",
            product:"Beta Life Box",
            testimony:"Honestly speaking,I never believed solar can work until I installed beta life box. With this I can watch news,use fan and my wife has light to cook and prepare the kids for school. Am so happy that this  package has saved me money. "
        },
        {
            name:"Mr. Monday Eboh",
            product:"1kva",
            testimony:"Funny enough,my 1kva system has been able to meet our immediate energy demand. With this am going to upgrade to a bigger package that can power all my appliances. However,so is still cheaper."
        },
        {
            name:"Dr. John Adebayo",
            product:"2.5kva/24V",
            testimony:"This my system opened my eyes to see how much I have wasted in buying fuel. Now that leakage has stopped and my family are happy with my decision to install solar system."
        },
        {
            name:"Engr. Peter Idugboe",
            product:"3.5kva/24V",
            testimony:"Although I had the believe that solar system works,but not to the extent am enjoying now on daily basis. My freezer and fridge always blocked with ice,using my washing machine and other appliances in the house gives us joy as a family. I can't do without listening to news and this installation made it possible. Am over excited and will canvass for more people to go solar. Green fusion thanks for the great job."
        },
        {
            name:"Mr. Ovie Whiskey",
            product:"5kva/48V",
            testimony:"Although I had the believe that solar system works,but not to the extent am enjoying now on daily basis. My freezer and fridge always blocked with ice,using my washing machine and other appliances in the house gives us joy as a family. I can't do without listening to news and this installation made it possible. Am over excited and will canvass for more people to go solar. Green fusion thanks for the great job."
        },
        {
            name:"Mrs Beatrice Osaghade",
            product:"20kva/96V",
            testimony:"Hmmmmmm...this is mind blowing since I installed solar system in my hotel. How i wished I believed earlier that solar can work like this. I wasted millions powering my hotel with diesel. Now my profit is complete since I installed solar system.Green fusion won my heart."
        },
        {
            name:"Mrs Blessing Omafor Solomon",
            product:"10kva/48V",
            testimony:"Do you know that since I installed solar system for my shop and ice block business,I have been experiencing business boom because I no longer disappoint my customers again as they Nick named me mama cool. Green fusion thanks for helping my business succeed."
        },
       
    ]
  return (
    <div className='p-[40px]'>
        <h1 className='font-bold font-[lato] text-center text-2xl mb-4 text-[#4A4E55]'>Testimonials</h1>
      <Slider {...settings}>
    {Testimonials.map((testimony)=><Testimony data={testimony}/>)}

      </Slider>

    </div>
  )
}

export default Testimonials