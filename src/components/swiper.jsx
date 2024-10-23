import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import lawrence from "./lawrence.jpg";
import emmanuel from "./emmanuel.jpg";
import isaac from "./isaac.jpg";
import vincent from "./vincent.jpg";
import victory from "./victory.jpg";
import monday from "./monday.jpg";
import abraham from "./abraham.jpg";
import Staff from './staff';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Swipers() {
  return (
    <div className="container">
      <h1 className="font-bold text-center border-[#37CA2A] font-[lato] text-3xl ">Our Team</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={lawrence} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>
            Lawrence Onaudhe</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 text-center mt-2'>
            Head Administration</p>
       </div>
        </SwiperSlide>
      
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={emmanuel} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>Ehigiamusoe Emmanuel</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 text-center mt-2'>Head Production and Installation</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={victory} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>Victory Iyoha</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 text-center mt-2'>Head Training</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={abraham} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>Atuba Abraham</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 text-center mt-2'>Head Marketing</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={monday} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>
            Monday Erhunwmunse</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 
        text-center mt-2'>Head Research</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={isaac} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>
            Osarenkhoe Isaac</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={vincent} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>
            Vincent Okpefa</h1>
        </div>
        </SwiperSlide>


       
      </Swiper>
    </div>
  )
}

export default Swipers