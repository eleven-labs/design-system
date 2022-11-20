import classNames from 'classnames';

import { classNamesWithMediaQueries } from '@/helpers/systemPropsHelper';
import { FlexOrGridBoxItemSystemProps } from '@/types';

export const flexOrGridBoxItemClassName = <TProps extends FlexOrGridBoxItemSystemProps>(props: TProps): string =>
  classNames(
    ...classNamesWithMediaQueries<string>({
      propValue: props.align,
      className: 'self',
      withSuffixPropValue: true,
    })
  );
