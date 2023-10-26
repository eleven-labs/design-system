import classNames from 'classnames';
import * as React from 'react';

import { systemProps } from '@/constants';
import { polyRef } from '@/helpers/polyRef';
import { omitSystemProps, systemClassName } from '@/helpers/systemPropsHelper';
import type { SystemProps } from '@/types';

export interface BoxProps extends SystemProps {
  className?: string;
  children?: React.ReactNode;
}

export const Box = polyRef<'div', BoxProps>(({ as: As = 'div', className, children, ...props }, ref) => (
  <As
    {...omitSystemProps({ props, systemPropNames: Object.keys(systemProps) })}
    ref={ref}
    className={classNames(systemClassName(props), className)}
  >
    {children}
  </As>
));

Box.displayName = 'Box';
