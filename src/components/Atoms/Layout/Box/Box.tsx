import classNames from 'classnames';
import * as React from 'react';

import { systemProps, typographySystemProps } from '@/constants';
import { omitSystemProps, systemClassName, typographySystemClassName } from '@/helpers/systemPropsHelper';
import { PolymorphicProps, PolymorphicRef, SystemProps, TypographySystemProps } from '@/types';

export type BoxProps<C extends React.ElementType = 'div'> = PolymorphicProps<C> &
  SystemProps &
  Pick<TypographySystemProps, 'textAlign'>;

export const Box = React.forwardRef(
  <C extends React.ElementType = 'div'>({ as, children, ...nativeProps }: BoxProps<C>, ref?: PolymorphicRef<C>) =>
    React.createElement(
      as || 'div',
      {
        ...omitSystemProps({
          props: nativeProps,
          systemPropNames: [...Object.keys(systemProps), ...Object.keys(typographySystemProps)],
        }),
        className: classNames(
          systemClassName(nativeProps),
          typographySystemClassName(nativeProps),
          nativeProps?.className
        ),
        ref,
      },
      children
    )
);

Box.displayName = 'Box';
