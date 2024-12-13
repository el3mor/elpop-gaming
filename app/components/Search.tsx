"use client"
import React, { useState, useRef, useEffect} from 'react'
import { SearchIcon, XIcon } from "lucide-react";
import gamesApis from '../api/gamesApis';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '../context/WishlistContext';


const Search = () => {
  const [search, setSearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  interface Game {
    id: number;
    name: string;
    background_image: string;
  }

  const [searchGame, setSearchGame] = useState<Game[]>([])
  const {setWishlist} = useWishlist()
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  },[])
  useEffect(() => {

      gamesApis.getGameBySearch(search).then((res) => {
        setSearchGame(res.data.results)
      })
  }, [search])

  return (
    <div className='relative'>
    <div className='z-20 w-full flex relative  group items-center gap-2 justify-between px-4 border border-black  rounded-xl md:w-[40%] bg-[#333839]'>
      <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="py-2  text-base   w-full bg-transparent text-gray-50  border-none   outline-none active:outline-none ring-0 placeholder:text-gray-400"/>
      <div className=' '>
        {search.length > 0 ? <XIcon onClick={() => {setSearch(''); setSearchGame([])}} className='cursor-pointer text-gray-50 hover:text-rose-400' size={20}/> : <SearchIcon onClick={() => inputRef.current ? inputRef.current.focus() : null} className='cursor-pointer text-gray-50 hover:text-rose-400' size={20} />}
      </div>
    </div>

   {search.length > 0 && searchGame.length > 0 &&  <div className="absolute z-10 max-h-96 md:w-[40%] bg-[#333839] p-5 rounded-xl overflow-y-auto ">
    {
      search.length > 0 && searchGame.length > 0 && searchGame.map((game: Game) => (
        <Link href={`/games/${game.id}`} key={game.id} className='flex items-center gap-2 my-3 rounded-2xl p-3 hover:bg-rose-400'>
          <div className="rounded-2xl relative overflow-hidden w-[40%] bg-neutral-900 h-20">
            <Image src={game.background_image} layout='fill' className='object-cover' alt={game.name} />
          </div>
          <p>{game.name}</p>
        </Link>
      ))
    }
    </div>}
    </div>
  )
}

export default Search
