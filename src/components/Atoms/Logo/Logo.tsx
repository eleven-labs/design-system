import * as React from 'react';

import { Svgs } from '@/components';
import { cn } from '@/helpers';

export const logoName = ['website', 'blog'] as const;
export type LogoNameType = (typeof logoName)[number];

export interface LogoProps extends React.ComponentPropsWithoutRef<'div'> {
  name: LogoNameType;
  size?: string | number;
}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(({ name, size, className, style, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('flex items-center justify-center', className)}
    style={{ fontSize: size, ...style }}
  >
    <Svgs.Logo height="1em" />
    {name === 'blog' ? (
      <div className="ml-[0.2ex] text-[1ex] leading-none">
        <p className="font-medium">Eleven Labs</p>
        <p className="font-bold">Le blog</p>
      </div>
    ) : (
      <p className="ml-[0.2ex] text-[1.5ex] leading-none font-medium">Eleven Labs</p>
    )}
  </div>
));

Logo.displayName = 'Logo';
