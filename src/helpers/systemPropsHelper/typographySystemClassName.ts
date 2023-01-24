import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper/classNamesWithModifiers';
import {
  FontWeightType,
  MediaQueryType,
  TextAlignType,
  TextDecorationType,
  TextTransformType,
  TypographySystemProps,
} from '@/types';

export const typographySystemClassName = <TProps extends TypographySystemProps>({
  textAlign,
  weight,
  textTransform,
  textDecoration,
  italic,
}: TProps): string => {
  return classNames(
    ...classNamesWithModifiers<MediaQueryType, TextAlignType>({
      propValue: textAlign,
      className: 'text',
    }),
    ...classNamesWithModifiers<MediaQueryType, FontWeightType>({
      propValue: weight,
      className: 'font-weight',
    }),
    ...classNamesWithModifiers<MediaQueryType, TextTransformType>({
      propValue: textTransform,
      className: 'text-transform',
    }),
    ...classNamesWithModifiers<MediaQueryType, TextDecorationType>({
      propValue: textDecoration,
      className: 'text-decoration',
    }),
    ...classNamesWithModifiers<MediaQueryType, boolean>({
      propValue: italic,
      className: 'text-italic',
    })
  );
};
