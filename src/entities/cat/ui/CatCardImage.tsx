'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './CatCard.module.scss';

interface CatCardImageProps {
  src: string;
  priority?: boolean;
}

export function CatCardImage({ src, priority }: CatCardImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt='Cat'
        width={224}
        height={224}
        className={styles.image}
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <div className={styles.skeletonOverlay} aria-hidden='true' />}
    </>
  );
}
