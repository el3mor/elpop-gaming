"use client";
import {createContext, useContext, useState} from 'react';



interface WishlistContextType {
  wishlist: any[];
  setWishlist: React.Dispatch<React.SetStateAction<any[]>>;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

import { ReactNode } from 'react';

export const WishlistProvider = ({children}: {children: ReactNode}) => {
  const [wishlist, setWishlist] = useState<any[]>([])
  return (
    <WishlistContext.Provider value={{wishlist, setWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
