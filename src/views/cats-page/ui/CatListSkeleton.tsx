import { CatCardSkeleton } from '@/entities/cat';
import styles from './CatListInfinite.module.scss';

export function CatListSkeleton() {
  return (
    <ul className={styles.list} aria-busy='true' aria-label='Загрузка котиков'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <CatCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
