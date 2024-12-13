"use client"
import gamesApis from '@/app/api/gamesApis'
import {useState, useEffect} from 'react'
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaHeart } from "react-icons/fa";
import { useWishlist } from '../../context/WishlistContext';
import GamePageSkeleton from '@/app/components/GamePageSkeleton';
import Image from 'next/image';


interface Game {
  id: string
  name?: string
  description_raw: string
  image: string
  rating: number
  released: string,
  publishers: [
    {
      name: string
    }
  ],
  genres: [
    {
      id: string,
      name: string
    }
  ]
}

interface Params {
  gameId: string
}

interface Screenshot {
  id: string
  image: string
}

const Page = () => {
  const params = useParams() as unknown as Params; // Explicitly cast to your type

  const { gameId } = params;
  console.log(gameId)
  const [loading, setLoading] = useState<boolean>(true);
  const [game, setGame] = useState<Game | undefined>();
  const [screenshots, setScreenshots] = useState([]);
  const {wishlist ,setWishlist} = useWishlist()
  
  console.log(game)
  useEffect(() => {
    gamesApis.getGameById(gameId).then(res => {
      setGame(res.data);
      setLoading(false);
    });
    gamesApis.getGameScreenshots(gameId).then(res => {
      setScreenshots(res.data.results);
    })
  }, [gameId]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, 1000); // Delay updates by 1 second
    return () => clearTimeout(timeout); // Clear timeout if `wishlist` changes again within 1 second
  }, [wishlist]);
  return (
    <div className='mt-8'>
    {loading ? <GamePageSkeleton /> : (
      <div>
        <div className='mx-4 flex flex-row justify-between'>
          <div>
            <h1 className='text-3xl text-white font-extrabold'>{game?.name}</h1>
            <p className='text-gray-300 text-lg'>{game?.publishers[0]?.name}</p>
          </div>
          <div>
            <p className='text-lg text-white'>Ratings: {game?.rating}</p>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='w-full relative h-[30rem] mt-8'
          autoplay={{
            delay: 3000, // 3 seconds between slides
            disableOnInteraction: false, // Keep autoplay after user interaction
          }}
        >
          {screenshots.map((screenshot: Screenshot) => (
            <SwiperSlide key={screenshot.id}>
              <div className='relative w-full h-[30rem]'>
              <Image alt={screenshot.id} src={screenshot.image} fill className=' rounded-lg' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='mt-4 flex flex-row justify-between'>
          <div>
            {game?.genres.map((genre: { id: string, name: string }) => (
              <span key={genre.id} className='text-white px-4 py-2 bg-black/70 rounded-full text-[12px]'>{genre.name}</span>
            ))}
          </div>
          <div className='flex flex-row gap-2'>
            <FaHeart
              size={24}
              onClick={() => setWishlist(
                (oldGames: Game[]) =>
                  oldGames.some((item: { id: string | undefined }) => item.id === game?.id)
                    ? oldGames.filter((item: { id: string | undefined }) => item.id !== game?.id)
                    : [...oldGames, game]
              )}
              className={`${
                wishlist.some((item: { id: string | undefined }) => item.id === game?.id)
                  ? "text-rose-600"
                  : "text-white"
              } hover:text-rose-500 cursor-pointer`}
            />
          </div>
        </div>
        <p className="mt-8 text-white">{game?.description_raw}</p>
        </div>
    )}
    </div>
  )
}

export default Page
