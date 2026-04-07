import type { ReactNode } from 'react';
import type { Cat } from '../model/types';
import { CatCardImage } from './CatCardImage';
import styles from './CatCard.module.scss';

interface CatCardProps {
  cat: Cat;
  likeSlot?: ReactNode;
  priority?: boolean;
}

export function CatCard({ cat, likeSlot, priority }: CatCardProps) {
  return (
    <article className={styles.card}>
      <CatCardImage src={cat.url} priority={priority} />
      {likeSlot && <div className={styles.likeSlot}>{likeSlot}</div>}
    </article>
  );
}
