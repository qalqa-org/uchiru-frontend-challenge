import type { ReactNode } from 'react';
import type { Cat } from '../model/types';
import { CatCard } from './CatCard';
import styles from './CatList.module.scss';

interface CatListProps {
  cats: Cat[];
  likeSlot?: (cat: Cat) => ReactNode;
}

export function CatList({ cats, likeSlot }: CatListProps) {
  return (
    <ul className={styles.list}>
      {cats.map((cat, index) => (
        <li key={cat.id}>
          <CatCard
            cat={cat}
            likeSlot={likeSlot?.(cat)}
            priority={index === 0}
          />
        </li>
      ))}
    </ul>
  );
}
