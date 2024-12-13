"use client";
import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  const {wishlist} = useWishlist()
  return (
    
    <div className='mt-8'>
      <h1 className='text-3xl font-bold text-white'>Wishlist ❤️</h1>
      <div className='grid grid-cols-4 gap-10'>
        {wishlist.map((game) => (
          <Link key={game.name} href={`games/${game.id}`} className="group hover:scale-105 duration-300 ">
          <div  className='bg-black/20 p-4 rounded-lg mt-4 group-hover:bg-black duration-300 relative'>
            <div className='relative h-52 mb-5'>
             
            <Image src={game.background_image} alt={game.name} fill />
            </div>
            <h2 className='text-xl text-white font-bold'>{game.name}</h2>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
