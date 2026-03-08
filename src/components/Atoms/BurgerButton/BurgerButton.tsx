import React from 'react';

import { cn } from '@/helpers';

export interface BurgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const BurgerButton: React.FC<BurgerButtonProps> = (props) => (
  <button
    {...props}
    className={cn(
      `
        inline-flex flex-col items-start justify-start gap-xxs border-none
        bg-transparent px-xxs-2 py-px leading-none text-primary
      `,
      props.className
    )}
  >
    <div className="h-[2px] w-[30px] bg-current" />
    <div className="h-[2px] w-[30px] bg-current" />
    <div className="h-[2px] w-[30px] bg-current" />
  </button>
);
