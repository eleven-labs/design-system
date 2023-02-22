import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import type { FlexBoxSystemProps, FlexDirectionType, FlexType, SpacingType } from '@/types';
import {
  AlignContentType,
  AlignItemsType,
  AlignSelfType,
  FlexBasisType,
  FlexWrapType,
  JustifyContentType,
  MediaQueryType,
} from '@/types';

export const flexBoxSystemClassName = <TProps extends FlexBoxSystemProps>(props: TProps): string =>
  classNames(
    classNamesWithModifiers<MediaQueryType, FlexDirectionType>({
      propValue: props.flexDirection,
      className: 'flex',
    }),
    classNamesWithModifiers<MediaQueryType, FlexWrapType>({
      propValue: props.flexWrap,
      className: 'flex',
    }),
    ...classNamesWithModifiers<MediaQueryType, AlignItemsType>({
      propValue: props.alignItems,
      className: 'items',
    }),
    ...classNamesWithModifiers<MediaQueryType, AlignContentType>({
      propValue: props.alignContent,
      className: 'content',
    }),
    ...classNamesWithModifiers<MediaQueryType, JustifyContentType>({
      propValue: props.justifyContent,
      className: 'justify',
    }),
    ...classNamesWithModifiers<MediaQueryType, SpacingType>({
      propValue: props.gap,
      className: 'gap',
    }),
    ...classNamesWithModifiers<MediaQueryType, SpacingType>({
      propValue: props.gapX,
      className: 'gap-x',
    }),
    ...classNamesWithModifiers<MediaQueryType, SpacingType>({
      propValue: props.gapY,
      className: 'gap-y',
    }),
    ...classNamesWithModifiers<MediaQueryType, AlignSelfType>({
      propValue: props.alignSelf,
      className: 'self',
    }),
    classNamesWithModifiers<MediaQueryType, FlexBasisType>({
      propValue: props.flexBasis,
      className: 'basis',
    }),
    classNamesWithModifiers<MediaQueryType, FlexType>({
      propValue: props.flex,
      className: 'flex',
    })
  );
