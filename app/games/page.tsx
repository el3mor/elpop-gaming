"use client"
import {useState, useEffect} from 'react'
import GridContainer from '../components/(default)/GridContainer'
import gamesApis from '../api/gamesApis'
import CustomPagination from '../components/CustomPagination'
import Link from 'next/link'

interface Category {
  id: number,
  name: string,
  slug:string
}

interface Game {
  id: number,
  name: string,
  background_image: string,
  count:number
}
const Page = () => {
  const [allCategory, setAllCategory] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string >("")
  const [allGames, setAllGames] = useState<Game[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1)
  useEffect(() => {
    gamesApis.getAllCategories().then((res) => {
      setAllCategory(res.data.results)
    })
    
  }, [])
  useEffect(() => {
    setLoading(true); // Start loading
    const fetchGames = selectedCategory
      ? gamesApis.getGameByCategory(page, "genres", selectedCategory)
      : gamesApis.getAllGames(page);

    fetchGames.then((res) => {
      setAllGames(res.data.results);
      setLoading(false); // Stop loading
    });
  }, [page, selectedCategory]);
  const totalPages = Math.ceil(200 / 20);
  return (
    <div className='mt-8'>
      <GridContainer cols={12}>
        <div className='col-span-3'>
          <h1 className='text-3xl font-bold text-white'>All Categories</h1>
          <div className="mt-5 flex gap-5 flex-col ">
            {allCategory.map((category) => (
              <div key={category.id} onClick={() => setSelectedCategory(category.slug !== selectedCategory ? category.slug : "")} className={`${category.slug === selectedCategory ? "bg-black" : "bg-black/20"} p-4 rounded-lg w-3/5 cursor-pointer hover:bg-black/70 duration-300 relative `}>
                <h2 className='text-sm text-white font-bold'>{category.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-9'>
          <h1 className='text-3xl font-bold text-white'>All Games</h1>
          <div className='grid grid-cols-4 gap-10'>
          {loading
              ? Array.from({ length: 8 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-black/20 p-4 rounded-lg mt-4 relative animate-pulse"
                  >
                    <div className="relative h-52 mb-5 bg-gray-700 rounded-lg"></div>
                    <div className="h-6 bg-gray-700 rounded-lg w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded-lg w-1/2"></div>
                  </div>
                ))
              : allGames.map((game) => (
                  <Link
                    href={`/games/${game.id}`}
                    key={game.id}
                    className="bg-black/20 p-4 rounded-lg mt-4 relative hover:bg-black/70 duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <div className="relative h-52 mb-5">
                      <img
                        src={game.background_image}
                        alt={game.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h2 className="text-xl text-white font-bold">{game.name}</h2>
                  </Link>
                ))}
          </div>
          <CustomPagination setPage={setPage} page={page} count={totalPages}/>
        </div>
      </GridContainer>
    </div>
  )
}

export default Page
