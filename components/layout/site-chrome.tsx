'use client';

import { usePathname } from 'next/navigation';

import { CursorGlow } from '@/components/visuals/cursor-glow';
import { Footer } from '@/components/layout/footer';
import { FloatingDock } from '@/components/navigation/floating-dock';
import { ScrollProgress } from '@/components/visuals/scroll-progress';

export function SiteChrome({ children, navbar }: Readonly<{ children: React.ReactNode; navbar: React.ReactNode }>) {
  const pathname = usePathname();
  const showAuxChrome = pathname !== '/';

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      {navbar}
      {children}
      {showAuxChrome ? <Footer /> : null}
      {showAuxChrome ? <FloatingDock /> : null}
    </>
  );
}