import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import type { FlexItemSystemProps, FlexType } from '@/types';
import type { FlexBasisType, MediaQueryType } from '@/types';

export const flexItemSystemClassName = <TProps extends FlexItemSystemProps>(props: TProps): string =>
  classNames(
    classNamesWithModifiers<MediaQueryType, FlexBasisType>({
      propValue: props.flexBasis,
      className: 'basis',
    }),
    classNamesWithModifiers<MediaQueryType, FlexType>({
      propValue: props.flex,
      className: 'flex',
    })
  );
