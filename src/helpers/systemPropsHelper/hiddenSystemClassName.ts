import classNames from 'classnames';

import type { HiddenSystemProps } from '@/types';

export const hiddenSystemClassName = <TProps extends HiddenSystemProps>(props: TProps): string =>
  classNames({
    [`hidden-above@${props.hiddenAbove}`]: Boolean(props.hiddenAbove),
    [`hidden-below@${props.hiddenBelow}`]: Boolean(props.hiddenBelow),
  });
