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
      <h1 className="heading">Flower Gallery</h1>
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
          <img src={lawrence} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={emmanuel} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[300px] h-[400px] shadow-lg mb-2 rounded-md'>
        <img src={emmanuel} className='w-full h-[320px]' />
        <h1 className='font-bold font-[lato] text-2xl mb-2 text-center mt-2'>Emmanuel</h1>
        <p className='font-bold font-[lato] text-sm text-[#4A4E55] mb-2 text-center mt-2'>Senior</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={isaac} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={victory} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abraham} alt="slide_image" />
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Swipers