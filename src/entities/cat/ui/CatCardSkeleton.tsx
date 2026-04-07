import styles from './CatCardSkeleton.module.scss';

export function CatCardSkeleton() {
  return <div className={styles.skeleton} aria-hidden='true' />;
}
