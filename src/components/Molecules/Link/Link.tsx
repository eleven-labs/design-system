import { Slot, Slottable } from '@radix-ui/react-slot';
import * as React from 'react';

import { Icon } from '@/components';
import { cn } from '@/helpers';
import type { IconNameType } from '@/tokens';

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
  icon?: IconNameType;
  children?: React.ReactNode;
}

const linkClassName = 'font-semibold underline decoration-current hover:no-underline';

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ asChild = false, icon, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';

    if (icon) {
      return (
        <Comp
          ref={ref}
          {...props}
          className={cn(linkClassName, 'inline-flex items-center gap-xxs text-info', className)}
        >
          <Icon name={icon} />
          <Slottable>
            <span>{children}</span>
          </Slottable>
        </Comp>
      );
    }

    return (
      <Comp ref={ref} {...props} className={cn(linkClassName, 'text-info', className)}>
        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);

Link.displayName = 'Link';
