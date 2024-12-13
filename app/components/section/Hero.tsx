import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from '../Slider';
import { Pagination, Autoplay } from 'swiper/modules';


const Hero = () => {
  return (
    <div className=' h-full mt-8'>
      <div>
        <Swiper
        modules={[ Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
         
      pagination={{ clickable: true }}


          className='w-full relative h-[30rem]'
          autoplay={{
            delay: 3000, // 3 seconds between slides
            disableOnInteraction: false, // Keep autoplay after user interaction
          }}
        >
          <SwiperSlide>
            <Slider backgroundSrc='/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4' 
            logoSrc="/call-of-duty-logo.webp" 
            btnColor="bg-orange-500" 
            title='The truth lies' 
            text='Last chance to pre-order and get access to additional premium content. Call of Duty®: Black Ops 6 launches on October 25th'
            gameId="983212" />
          </SwiperSlide>
          <SwiperSlide>
          <Slider backgroundSrc='/spidervideo.mp4' 
            logoSrc="/news1title.webp" 
            btnColor="bg-red-500" 
            title='BE GREATER TOGETHER' 
            text='Peter Parker & Miles Morales return for an exciting new adventure in the acclaimed Marvel’s Spider-Man franchise, out October 20 for PS5.'
            gameId='846303' />
          </SwiperSlide>
          <SwiperSlide> <Slider backgroundSrc='/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4' 
            logoSrc="/iconcyber.webp" 
            btnColor="bg-yellow-500" 
            title='Freedom Always Comes At A Price…' 
            text='As cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of sinister political machinations.' 
            gameId="662316"/>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
