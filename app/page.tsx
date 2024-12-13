"use client";
import Hero from "./components/section/Hero";
import GamesSlider from "./components/section/GamesSlider";
import gamesApis from "./api/gamesApis";
import { useState, useEffect } from "react";



export default function Home() {
  const [ps5Games, setPs5Games] = useState<unknown[]>([]);
  const [pcGames, setPcGames] = useState<unknown[]>([]);
  const [latestGames, setLatestGames] = useState<unknown[]>([]);

  useEffect(() => {
    gamesApis.getGameByPlateform('187').then(res => setPs5Games(res.data.results));
    gamesApis.getGameByPlateform('4').then(res => setPcGames(res.data.results));
    gamesApis.getLatestGames().then(res => setLatestGames(res.data.results));
  }, []);
  
  return (
    <div >
      <Hero/>
      <GamesSlider title='Latest Games' games={latestGames}/>
      <GamesSlider title='Top Games For PS5' games={ps5Games}/>
      <GamesSlider title='Top Games For PC' games={pcGames}/>
    </div>
  );
}
