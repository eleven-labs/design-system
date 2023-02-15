import React from 'react';

import { Box } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { As, AsProps, ColorSystemProps, SpacingSystemProps, TextSizeType, TypographySystemProps } from '@/types';

export interface TextOptions {
  size?: TextSizeType;
}
export type TextProps<T extends As = 'p'> = AsProps<T> &
  TextOptions &
  Omit<TypographySystemProps, 'textSize'> &
  Pick<ColorSystemProps, 'color'> &
  SpacingSystemProps;

export const Text = forwardRef<TextProps, 'p'>(({ as = 'p', size = 'm', children, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} textSize={size}>
    {children}
  </Box>
));

Text.displayName = 'Text';
