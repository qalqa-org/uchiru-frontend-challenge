export const Routes = {
  CATS: '/',
  FAVORITES: '/favorites',
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];

export const navLinks: { label: string; href: Route }[] = [
  { label: 'Все котики', href: Routes.CATS },
  { label: 'Любимые котики', href: Routes.FAVORITES },
];
