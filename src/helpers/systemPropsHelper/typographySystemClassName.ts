import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper/classNamesWithModifiers';
import { MediaQueryType, TextAlignType, TypographySystemProps } from '@/types';

export const typographySystemClassName = <TProps extends TypographySystemProps>({
  textAlign,
  ...props
}: TProps): string => {
  return classNames(
    ...classNamesWithModifiers<MediaQueryType, TextAlignType>({
      propValue: textAlign,
      className: 'text',
    }),
    {
      [`font-weight-${props.fontWeight}`]: props.fontWeight,
      [`text-${props.textTransform}`]: props.textTransform,
      [`text-underline`]: props.underline,
      [`text-italic`]: props.italic,
    }
  );
};
