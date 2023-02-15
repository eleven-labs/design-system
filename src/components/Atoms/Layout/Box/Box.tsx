import classNames from 'classnames';
import * as React from 'react';

import { systemProps } from '@/constants';
import { forwardRef, omitSystemProps, systemClassName, typographySystemClassName } from '@/helpers/systemPropsHelper';
import { As, AsProps, SystemProps } from '@/types';

export type BoxProps<T extends As = 'div'> = AsProps<T> & SystemProps;

export const Box = forwardRef<BoxProps, 'div'>(({ as: As = 'div', textSize, children, ...props }, ref) => (
  <As
    {...omitSystemProps({ props, systemPropNames: Object.keys(systemProps) })}
    ref={ref}
    className={classNames(
      systemClassName(props),
      typographySystemClassName(props),
      { [`text-${textSize}`]: Boolean(textSize) },
      props?.className
    )}
  >
    {children}
  </As>
));

Box.displayName = 'Box';
