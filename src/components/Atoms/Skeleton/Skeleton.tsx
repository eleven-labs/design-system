import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { cn } from '@/helpers';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  isLoading?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ asChild = false, isLoading = true, children, className, ...props }, ref) => {
    if (!isLoading) return <>{children}</>;

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          `
            animate-pulse bg-ultra-light-grey
            *:invisible *:cursor-default
          `,
          className
        )}
      >
        {children ?? <span>&nbsp;</span>}
      </Comp>
    );
  }
);

Skeleton.displayName = 'Skeleton';
