import classNames from 'classnames';

import type { HeadingSizeType, TextSizeType, TypographySystemProps } from '@/types';

export const typographySystemClassName = <TProps extends TypographySystemProps<TextSizeType | HeadingSizeType>>({
  size,
  textAlign,
  weight,
  textTransform,
  textDecoration,
  italic,
  isHeading = false,
}: TProps & { isHeading?: boolean }): string => {
  return classNames({
    [`text-size-${size}`]: Boolean(size) && !isHeading,
    [`heading-size-${size}`]: Boolean(size) && isHeading,
    [`text-${textAlign}`]: Boolean(textAlign),
    [`text-transform-${textTransform}`]: Boolean(textTransform),
    [`text-decoration-${textDecoration}`]: Boolean(textDecoration),
    [`font-weight-${weight}`]: Boolean(weight),
    'text-italic': Boolean(italic),
  });
};
