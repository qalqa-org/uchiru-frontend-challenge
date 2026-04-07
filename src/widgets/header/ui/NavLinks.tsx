'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/shared/config';
import { cn } from '@/shared/lib';
import styles from './Header.module.scss';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navLinks.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={cn(styles.navLink, [
            pathname === href && styles.navLinkActive,
          ])}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
