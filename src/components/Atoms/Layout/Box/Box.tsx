import classNames from 'classnames';
import * as React from 'react';

import { systemProps } from '@/constants';
import { polyRef } from '@/helpers/polyRef';
import { omitSystemProps, systemClassName, typographySystemClassName } from '@/helpers/systemPropsHelper';
import { SystemProps } from '@/types';

export interface BoxProps extends SystemProps {
  className?: string;
  children?: React.ReactNode;
}

export const Box = polyRef<'div', BoxProps>(({ as: As = 'div', textSize, className, children, ...props }, ref) => (
  <As
    {...omitSystemProps({ props, systemPropNames: Object.keys(systemProps) })}
    ref={ref}
    className={classNames(
      systemClassName(props),
      typographySystemClassName(props),
      { [`text-${textSize}`]: Boolean(textSize) },
      className
    )}
  >
    {children}
  </As>
));

Box.displayName = 'Box';
