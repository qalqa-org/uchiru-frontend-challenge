import Image from 'next/image';
import type { ReactNode } from 'react';
import type { Cat } from '../model/types';
import styles from './CatCard.module.scss';

interface CatCardProps {
  cat: Cat;
  likeSlot?: ReactNode;
  priority?: boolean;
}

export function CatCard({ cat, likeSlot, priority }: CatCardProps) {
  const isGif = cat.url.endsWith('.gif');

  return (
    <article className={styles.card}>
      <Image
        src={cat.url}
        alt='Cat'
        // sizes='224px'
        width={224}
        height={224}
        className={styles.image}
        priority={priority}
        unoptimized={isGif}
      />
      {likeSlot && <div className={styles.likeSlot}>{likeSlot}</div>}
    </article>
  );
}
