import * as React from 'react';

import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'accent' | 'muted';

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'badge-muted',
  accent: 'badge-accent',
  muted: 'badge-muted',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn('badge', badgeVariants[variant ?? 'default'], className)} {...props} />;
}
