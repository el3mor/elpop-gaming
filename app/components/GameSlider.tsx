/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaPlus } from "react-icons/fa";
import { useWishlist } from '../context/WishlistContext';
import {  XIcon } from "lucide-react";


interface Game {
  name: string;
  background_image: string;
  id:number
}

const GameSlider = ({game}: { game: Game }) => {
  const {wishlist ,setWishlist} = useWishlist()
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, 1000); // Delay updates by 1 second
    return () => clearTimeout(timeout); // Clear timeout if `wishlist` changes again within 1 second
  }, [wishlist]);
  
  const {name, background_image, id} = game
  
  console.log(id)
  console.log(wishlist)
  
  return (
    <div className="relative group">
     
    {wishlist.some((item) => item.id === id) ? (
    <XIcon 
        onClick={() => setWishlist((oldGames) => oldGames.filter((item) => item.id !== id))} 
        className="duration-700 z-10 absolute top-2 right-4 text-white w-7 h-7 hover:bg-transparent hover:text-rose-500 bg-rose-500 p-2 rounded-full cursor-pointer" 
    />
) : (
    <FaPlus 
        onClick={() => setWishlist((oldGames) => [...oldGames, game])} 
        className="duration-700 z-10 absolute top-2 right-4 text-white w-7 h-7 hover:bg-transparent hover:text-rose-500 bg-rose-500 p-2 rounded-full cursor-pointer" 
    />
)}
    <div className='  after:absolute after:inset-0  after:w-0 group-hover:after:w-full after:h-full after:bg-rose-500/60 after:rounded-2xl after:duration-200  w-full h-96 rounded-2xl overflow-hidden relative '>
    <Image src={background_image} alt={name} fill={true} className=' group-hover:scale-125 group-hover:rotate-6 duration-200 object-cover' />

    </div>
   <Link href={`/games/${id}`} className="relative w-full h-full">

    <div className='flex flex-col justify-end pl-5 pb-5 text-white z-20'>
      <h3 className='text-xl font-bold'>{name}</h3>
      </div>

   </Link>
   </div>
  )
}

export default GameSlider
