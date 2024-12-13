import React from 'react'
import BAGBtn from '../BAGBtn'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';
import GameSlider from '../GameSlider';

type Props = {
  title: string,
  games: any[]
}

const GamesSlider = ({title, games}: Props) => {
  console.log(games)
  return (
    <section className='mt-28'>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-extrabold">{title}</h1>
        <BAGBtn />
      </div>
      <div className='relative h-full gap-3 w-full flex flex-col mt-5'>
      <Swiper
        modules={[ Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
         
      


          className='w-full relative h-full'
          autoplay={{
            delay: 10000, // 3 seconds between slides
            disableOnInteraction: true, // Keep autoplay after user interaction
          }}
        >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <GameSlider game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  )
}

export default GamesSlider
