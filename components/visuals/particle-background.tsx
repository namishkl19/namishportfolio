'use client';

import { cn } from '@/lib/utils';

export function ParticleBackground({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn('hero-grid-bg', className)} />;
}
