import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper/classNamesWithModifiers';
import type { MediaQueryType, TextAlignType, TypographySystemProps } from '@/types';

export const typographySystemClassName = <TProps extends TypographySystemProps>({
  textAlign,
  textSize,
  lineClamp,
  ...props
}: TProps): string =>
  classNames(
    ...classNamesWithModifiers<MediaQueryType, TextAlignType>({
      propValue: textAlign,
      className: 'text',
    }),
    {
      [`font-weight-${props.fontWeight}`]: props.fontWeight,
      [`text-${props.textTransform}`]: props.textTransform,
      [`text-underline`]: props.underline,
      [`text-italic`]: props.italic,
      [`text-${textSize}`]: textSize,
      [`line-clamp-${lineClamp}`]: lineClamp,
    }
  );
