import classNames from 'classnames';

import type { ColorSystemProps } from '@/types';

export const colorSystemClassName = <TProps extends ColorSystemProps>(props: TProps): string =>
  classNames({
    [`bg-${props.bg}`]: props.bg,
    [`color-${props.color}`]: props.color,
  });
