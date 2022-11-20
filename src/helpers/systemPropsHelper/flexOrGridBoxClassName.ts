import classNames from 'classnames';

import { classNamesWithMediaQueries } from '@/helpers/systemPropsHelper';
import type { FlexOrGridBoxSystemProps } from '@/types';

export const flexOrGridBoxClassName = <TProps extends FlexOrGridBoxSystemProps>(props: TProps): string => {
  return classNames(
    ...classNamesWithMediaQueries<string>({
      propValue: props.alignItems,
      className: 'items',
      withSuffixPropValue: true,
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.alignContent,
      className: 'content',
      withSuffixPropValue: true,
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.justifyContent,
      className: 'justify',
      withSuffixPropValue: true,
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.gap,
      className: 'gap',
      withSuffixPropValue: true,
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.gapX,
      className: 'gap-x',
      withSuffixPropValue: true,
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.gapY,
      className: 'gap-y',
      withSuffixPropValue: true,
    })
  );
};
