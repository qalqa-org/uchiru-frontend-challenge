import type { ReactNode } from 'react';
import { catApi } from '../api/cat-api';
import type { Cat } from '../model/types';
import { CatCard } from './CatCard';
import styles from './CatList.module.scss';

interface CatListProps {
  limit?: number;
  likeSlot?: (cat: Cat) => ReactNode;
}

export async function CatList({ limit, likeSlot }: CatListProps) {
  const cats = await catApi.getCats(limit);

  return (
    <ul className={styles.list}>
      {cats.map((cat, index) => (
        <li key={cat.id}>
          <CatCard cat={cat} likeSlot={likeSlot?.(cat)} priority={index === 0} />
        </li>
      ))}
    </ul>
  );
}
