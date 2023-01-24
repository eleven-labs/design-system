import classNames from 'classnames';

import { colorSystemClassName, spacingSystemClassName } from '@/helpers/systemPropsHelper';
import { SystemProps } from '@/types';

export const systemClassName = <TProps extends SystemProps = SystemProps>(props: TProps): string =>
  classNames(spacingSystemClassName(props), colorSystemClassName(props));
