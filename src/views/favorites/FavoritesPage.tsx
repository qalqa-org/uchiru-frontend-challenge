'use client';

import { Cat } from '@/entities/cat/model/types';
import { CatList } from '@/entities/cat/ui/CatList';
import { LikeButton, useFavorites } from '@/features';
import styles from './FavoritesPage.module.scss';

export function FavoritesPage() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <p className={styles.empty}>Вы ещё не добавили ни одного котика :(</p>
    );
  }

  return (
    <CatList
      cats={favorites}
      likeSlot={(cat: Cat) => (
        <LikeButton
          liked={isFavorite(cat.id)}
          onToggle={() => toggleFavorite(cat)}
        />
      )}
    />
  );
}
