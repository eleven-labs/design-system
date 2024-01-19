import classNames from 'classnames';

import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import type { FlexDirectionType, FlexSystemProps, FlexWrapType } from '@/types';
import type { MediaQueryType } from '@/types';

export const flexSystemClassName = <TProps extends FlexSystemProps>(props: TProps): string =>
  classNames(
    classNamesWithModifiers<MediaQueryType, FlexDirectionType>({
      propValue: props.flexDirection,
      className: 'flex',
    }),
    classNamesWithModifiers<MediaQueryType, FlexWrapType>({
      propValue: props.flexWrap,
      className: 'flex',
    })
  );
