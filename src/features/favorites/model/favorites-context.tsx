'use client';

import type { Cat } from '@/entities/cat';
import { createContext, useContext, useEffect, useState } from 'react';

interface FavoritesContextValue {
  favorites: Cat[];
  toggleFavorite: (cat: Cat) => void;
  isFavorite: (catId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Cat[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      queueMicrotask(() => {
        setFavorites(JSON.parse(stored));
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (cat: Cat) => {
    setFavorites((prev) =>
      prev.some((c) => c.id === cat.id)
        ? prev.filter((c) => c.id !== cat.id)
        : [...prev, cat],
    );
  };

  const isFavorite = (catId: string) => favorites.some((c) => c.id === catId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
