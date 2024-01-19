import classNames from 'classnames';

import { colorSystemClassName } from '@/helpers/systemPropsHelper/colorSystemClassName';
import { flexItemSystemClassName } from '@/helpers/systemPropsHelper/flexItemSystemClassName';
import { flexOrGridItemSystemClassName } from '@/helpers/systemPropsHelper/flexOrGridItemSystemClassName';
import { layoutSystemClassName } from '@/helpers/systemPropsHelper/layoutSystemClassName';
import { spacingSystemClassName } from '@/helpers/systemPropsHelper/spacingSystemClassName';
import { typographySystemClassName } from '@/helpers/systemPropsHelper/typographySystemClassName';
import type { SystemProps } from '@/types';

export const systemClassName = <TProps extends SystemProps = SystemProps>(props: TProps): string =>
  classNames(
    colorSystemClassName(props),
    layoutSystemClassName(props),
    spacingSystemClassName(props),
    flexOrGridItemSystemClassName(props),
    flexItemSystemClassName(props),
    typographySystemClassName(props)
  );
