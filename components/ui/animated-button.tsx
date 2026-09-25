'use client';

import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  pulse?: boolean;
}

export function AnimatedButton({ className, pulse = false, ...props }: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} animate={pulse ? { scale: [1, 1.02, 1] } : undefined} transition={{ duration: 2, repeat: pulse ? Infinity : 0, repeatType: 'mirror' }}>
      <Button className={cn('button-link', className)} {...props} />
    </motion.div>
  );
}
