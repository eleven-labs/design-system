import classNames from 'classnames';
import * as React from 'react';

import { Box } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { As, AsProps, ColorSystemProps, HeadingSizeType, SpacingSystemProps, TypographySystemProps } from '@/types';

export interface HeadingOptions {
  size?: HeadingSizeType;
}
export type HeadingProps<T extends As = 'h1'> = AsProps<T> &
  HeadingOptions &
  Omit<TypographySystemProps, 'textSize' | 'fontWeight'> &
  Pick<ColorSystemProps, 'color'> &
  SpacingSystemProps;

export const Heading = forwardRef<HeadingProps, 'h1'>(({ as = 'h1', size, children, ...props }, ref) => (
  <Box
    {...(props as AsProps)}
    as={as}
    ref={ref}
    className={classNames({ [`heading-${size}`]: Boolean(size) }, props?.className)}
  >
    {children}
  </Box>
));

Heading.displayName = 'Heading';
