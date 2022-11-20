import classNames from 'classnames';

import { colorSystemProps, spacingSystemProps } from '@/constants/systemProps';
import type { SystemProps } from '@/types';

import { systemClassNames } from './systemClassNames';

export const systemClassName = <TProps extends SystemProps = SystemProps>(props: TProps): string =>
  classNames(
    ...systemClassNames({
      props,
      systemPropNames: Object.keys(colorSystemProps),
    }),
    ...systemClassNames({
      props,
      systemPropNames: Object.keys(spacingSystemProps),
      hasResponsiveProps: true,
    })
  );
