import React from 'react';

import { cn } from '@/helpers';

export const closeButtonVariant = ['primary', 'secondary'] as const;
export type CloseButtonVariantType = (typeof closeButtonVariant)[number];

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CloseButtonVariantType;
}

const variantClassName: Record<CloseButtonVariantType, string> = {
  primary: 'size-[30px] text-primary',
  secondary: 'size-[20px] text-grey',
};

export const CloseButton: React.FC<CloseButtonProps> = ({ variant = 'primary', ...props }) => (
  <button
    {...props}
    className={cn(
      `
        relative inline-flex items-center justify-center border-none
        bg-transparent p-0
      `,
      variantClassName[variant],
      props.className
    )}
  >
    <span
      className="
        absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rotate-45
        bg-current
      "
    />
    <span
      className="
        absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 -rotate-45
        bg-current
      "
    />
  </button>
);
