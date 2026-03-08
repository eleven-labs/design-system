import { Slot, Slottable } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { Icon } from '@/components';
import { cn } from '@/helpers';

const buttonVariants = cva(
  `
    inline-flex appearance-none flex-row items-center justify-center
    rounded-full border-solid px-m py-xs font-heading typography-text-s
    font-bold uppercase
    disabled:cursor-not-allowed
  `,
  {
    variants: {
      variant: {
        primary: `
          border-0 bg-info text-white
          disabled:bg-dark-grey
        `,
        secondary: `
          border-2 border-transparent bg-white text-info
          hover:border-info
          disabled:border-dark-grey
        `,
        accent: 'border-0 bg-accent text-primary',
      },
      isChoiceChip: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      isChoiceChip: false,
    },
  }
);

export type ButtonVariantType = NonNullable<VariantProps<typeof buttonVariants>['variant']>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariantType;
  isChoiceChip?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant = 'primary', isChoiceChip = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        {...props}
        ref={ref}
        data-text={typeof children === 'string' ? children : ''}
        className={cn(buttonVariants({ variant, isChoiceChip }), className)}
      >
        {variant === 'secondary' && <Icon name="arrow" size="14" style={{ transform: 'scaleX(-1)' }} />}
        <Slottable>
          <span>{children}</span>
        </Slottable>
        {variant !== 'secondary' && <Icon name="arrow" size="14" />}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
