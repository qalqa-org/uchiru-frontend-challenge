import { catApi } from '@/entities/cat';
import styles from './CatsPage.module.scss';
import { CatListInfinite } from './ui/CatListInfinite';

export async function CatsPage() {
  const initialCats = await catApi.getCats(10, 0);

  return (
    <div className={styles.catsPage}>
      <CatListInfinite initialCats={initialCats} />
    </div>
  );
}
