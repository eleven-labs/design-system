import classNames from 'classnames';

import { colorSystemClassName } from '@/helpers/systemPropsHelper/colorSystemClassName';
import { hiddenSystemClassName } from '@/helpers/systemPropsHelper/hiddenSystemClassName';
import { layoutSystemClassName } from '@/helpers/systemPropsHelper/layoutSystemClassName';
import { spacingSystemClassName } from '@/helpers/systemPropsHelper/spacingSystemClassName';
import { SystemProps } from '@/types';

export const systemClassName = <TProps extends SystemProps = SystemProps>(props: TProps): string =>
  classNames(
    colorSystemClassName(props),
    layoutSystemClassName(props),
    spacingSystemClassName(props),
    hiddenSystemClassName(props)
  );
