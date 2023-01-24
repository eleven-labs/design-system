import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import { AlignSelfType, FlexOrGridBoxItemSystemProps, MediaQueryType } from '@/types';

export const flexOrGridBoxItemClassName = <TProps extends FlexOrGridBoxItemSystemProps>(props: TProps): string =>
  classNames(
    ...classNamesWithModifiers<MediaQueryType, AlignSelfType>({
      propValue: props.align,
      className: 'self',
    })
  );
