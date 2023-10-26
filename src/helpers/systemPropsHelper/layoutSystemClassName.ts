import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import type { DisplayType, LayoutSystemProps } from '@/types';
import type { HeightType, MediaQueryType, WidthType } from '@/types';

export const layoutSystemClassName = <TProps extends LayoutSystemProps>(props: TProps): string =>
  classNames(
    classNamesWithModifiers<MediaQueryType, DisplayType>({
      propValue: props.display,
      className: 'display',
    }),
    classNamesWithModifiers<MediaQueryType, WidthType>({
      propValue: props.width,
      className: 'width',
    }),
    classNamesWithModifiers<MediaQueryType, HeightType>({
      propValue: props.height,
      className: 'height',
    }),
    classNamesWithModifiers<MediaQueryType, WidthType>({
      propValue: props.minWidth,
      className: 'min-width',
    }),
    classNamesWithModifiers<MediaQueryType, WidthType>({
      propValue: props.maxWidth,
      className: 'max-width',
    }),
    classNamesWithModifiers<MediaQueryType, HeightType>({
      propValue: props.minHeight,
      className: 'min-height',
    }),
    classNamesWithModifiers<MediaQueryType, HeightType>({
      propValue: props.maxHeight,
      className: 'max-height',
    })
  );
