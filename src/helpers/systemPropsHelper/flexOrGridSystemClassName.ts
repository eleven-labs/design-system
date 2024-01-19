import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import type { FlexOrGridSystemProps, SpacingType } from '@/types';
import type { AlignContentType, AlignItemsType, JustifyContentType, MediaQueryType } from '@/types';

export const flexOrGridSystemClassName = <TProps extends FlexOrGridSystemProps>(props: TProps): string =>
  classNames(
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
    })
  );
