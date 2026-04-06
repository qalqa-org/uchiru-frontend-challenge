import { CatLikeButton } from '@/features';
import { CatList } from '@/entities/cat';
import styles from './CatsPage.module.scss';

export async function CatsPage() {
  return (
    <div className={styles.catsPage}>
      <CatList likeSlot={() => <CatLikeButton />} />
    </div>
  );
}
