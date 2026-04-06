import { CatList } from '@/entities/cat';
import styles from './CatsPage.module.scss';

export async function CatsPage() {
  return (
    <div className={styles.catsPage}>
      <CatList />
    </div>
  );
}
