'use client';

import { createContext, useContext, useState } from 'react';
import type { Cat } from '@/entities/cat';

interface CatListContextValue {
  cats: Cat[];
  page: number;
  hasMore: boolean;
  setCats: (cats: Cat[]) => void;
  appendCats: (cats: Cat[]) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
}

const CatListContext = createContext<CatListContextValue | null>(null);

export function CatListProvider({ children }: { children: React.ReactNode }) {
  const [cats, setCats] = useState<Cat[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const appendCats = (more: Cat[]) => setCats((prev) => [...prev, ...more]);

  return (
    <CatListContext.Provider
      value={{ cats, page, hasMore, setCats, appendCats, setPage, setHasMore }}
    >
      {children}
    </CatListContext.Provider>
  );
}

export function useCatList() {
  const ctx = useContext(CatListContext);
  if (!ctx) throw new Error('useCatList must be used within CatListProvider');
  return ctx;
}
