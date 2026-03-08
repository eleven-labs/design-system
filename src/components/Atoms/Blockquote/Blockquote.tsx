import React from 'react';

import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface BlockquoteProps extends Omit<ComponentPropsWithoutRef<'blockquote'>, 'align'> {}

export const Blockquote: React.FC<BlockquoteProps> = ({ children, className, ...props }) => (
  <blockquote
    {...props}
    className={cn(
      `
        relative pl-m font-[Georgia,var(--font-family-blockquote)]
        typography-text-m italic
        before:block before:h-20 before:text-[8rem] before:font-medium
        before:text-primary before:content-["“"]
        after:block after:h-20 after:rotate-180 after:text-[8rem]
        after:font-medium after:text-primary after:content-["“"]
      `,
      className
    )}
  >
    {children}
  </blockquote>
);
