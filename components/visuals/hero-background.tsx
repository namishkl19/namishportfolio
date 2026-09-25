import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function HeroBackground({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn('hero-grid-bg', className)}
      {...props}
    >
      <div className="hero-glow" />
    </div>
  );
}
