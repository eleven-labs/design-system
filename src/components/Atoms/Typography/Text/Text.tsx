import * as React from 'react';

import { Box } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import {
  As,
  AsProps,
  ColorSystemProps,
  HiddenSystemProps,
  SpacingSystemProps,
  TextSizeType,
  TypographySystemProps,
} from '@/types';

export interface TextOptions {
  size?: TextSizeType;
}
export type TextProps<T extends As = 'p'> = AsProps<T> &
  TextOptions &
  Omit<TypographySystemProps, 'textSize'> &
  Pick<ColorSystemProps, 'color'> &
  SpacingSystemProps &
  HiddenSystemProps;

export const Text = forwardRef<TextProps, 'p'>(({ as = 'p', size, children, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} textSize={size}>
    {children}
  </Box>
));

Text.displayName = 'Text';
