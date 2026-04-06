import styles from './Header.module.scss';
import { NavLinks } from './NavLinks';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLinks />
      </div>
    </header>
  );
}
