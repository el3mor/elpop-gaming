"use client"
import React from "react";

interface Game {

  name: string;

  background_image: string;

  id: number;

}



const WishlistContext = React.createContext<{ wishlist: Game[]; setWishlist: React.Dispatch<React.SetStateAction<Game[]>> } | undefined>(undefined);



export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {

  const [wishlist, setWishlist] = React.useState<Game[]>([]);



  return (

    <WishlistContext.Provider value={{ wishlist, setWishlist }}>

      {children}

    </WishlistContext.Provider>

  );

};



export const useWishlist = () => {

  const context = React.useContext(WishlistContext);

  if (context === undefined) {

    throw new Error('useWishlist must be used within a WishlistProvider');

  }

  return context;

};
