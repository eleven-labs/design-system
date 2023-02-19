import classNames from 'classnames';

import { colorSystemClassName } from '@/helpers/systemPropsHelper/colorSystemClassName';
import { flexBoxSystemClassName } from '@/helpers/systemPropsHelper/flexBoxSystemClassName';
import { hiddenSystemClassName } from '@/helpers/systemPropsHelper/hiddenSystemClassName';
import { layoutSystemClassName } from '@/helpers/systemPropsHelper/layoutSystemClassName';
import { spacingSystemClassName } from '@/helpers/systemPropsHelper/spacingSystemClassName';
import { typographySystemClassName } from '@/helpers/systemPropsHelper/typographySystemClassName';
import { SystemProps } from '@/types';

export const systemClassName = <TProps extends SystemProps = SystemProps>(props: TProps): string =>
  classNames(
    colorSystemClassName(props),
    flexBoxSystemClassName(props),
    layoutSystemClassName(props),
    spacingSystemClassName(props),
    typographySystemClassName(props),
    hiddenSystemClassName(props)
  );
