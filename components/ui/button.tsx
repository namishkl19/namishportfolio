import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const variantClassNames = {
  default: 'button-primary',
  secondary: 'button-secondary',
  outline: 'button-outline',
  ghost: 'button-ghost',
  accent: 'button-accent',
} as const;

const sizeClassNames = {
  default: '',
  sm: 'button-sm',
  lg: 'button-lg',
  icon: 'button-icon',
} as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof variantClassNames;
  size?: keyof typeof sizeClassNames;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return <Comp ref={ref} className={cn('button', variant ? variantClassNames[variant] : variantClassNames.default, size ? sizeClassNames[size] : sizeClassNames.default, className)} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button };
