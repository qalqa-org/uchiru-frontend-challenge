'use client';

import { cn } from '@/shared/lib';
import LikeFilledIcon from '../assets/like-filled.svg';
import LikeIcon from '../assets/like.svg';
import styles from './LikeButton.module.scss';

interface LikeButtonProps {
  liked: boolean;
  onToggle: () => void;
}

export function LikeButton({ liked, onToggle }: LikeButtonProps) {
  return (
    <button
      type='button'
      onClick={onToggle}
      className={styles.button}
      aria-label={liked ? 'Убрать из избранного' : 'Добавить в избранное'}
      aria-pressed={liked}
    >
      <span className={styles.icon}>
        <LikeFilledIcon
          className={cn(styles.filled, [liked && styles.filledActive])}
        />
        <LikeIcon className={styles.outline} />
      </span>
    </button>
  );
}
