'use client';

import { CatCard, loadMoreCatsAction, type Cat } from '@/entities/cat';
import { LikeButton, useCatList, useFavorites } from '@/features';
import { useEffect, useRef } from 'react';
import styles from './CatListInfinite.module.scss';

interface CatListInfiniteProps {
  initialCats: Cat[];
}

export function CatListInfinite({ initialCats }: CatListInfiniteProps) {
  const { cats, page, hasMore, setCats, appendCats, setPage, setHasMore } =
    useCatList();
  const { isFavorite, toggleFavorite } = useFavorites();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    if (cats.length === 0) {
      setCats(initialCats);
    }
  }, [cats.length, initialCats, setCats]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || loadingRef.current || !hasMore) return;

        loadingRef.current = true;
        const more = await loadMoreCatsAction(page);

        if (more.length === 0) {
          setHasMore(false);
        } else {
          appendCats(more);
          setPage(page + 1);
        }

        loadingRef.current = false;
      },
      { rootMargin: '200px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [page, hasMore, appendCats, setPage, setHasMore]);

  const displayCats = cats.length > 0 ? cats : initialCats;

  return (
    <>
      <ul className={styles.list}>
        {displayCats.map((cat, index) => (
          <li key={`${cat.id}-${index}`}>
            <CatCard
              cat={cat}
              priority={index === 0}
              likeSlot={
                <LikeButton
                  liked={isFavorite(cat.id)}
                  onToggle={() => toggleFavorite(cat)}
                />
              }
            />
          </li>
        ))}
      </ul>
      <div ref={sentinelRef} className={styles.sentinel} />
    </>
  );
}
