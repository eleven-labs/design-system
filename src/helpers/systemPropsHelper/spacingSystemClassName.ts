import classNames from 'classnames';

import { spacingSystemProps } from '@/constants';
import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import type { MediaQueryType, SpacingSystemProps, SpacingType } from '@/types';

export const spacingSystemClassName = <TProps extends SpacingSystemProps>(props: TProps): string =>
  classNames(
    Object.entries(props)
      .filter(([propName]) => Object.keys(spacingSystemProps).includes(propName))
      .reduce<string[]>((currentClassNames, [propName, propValue]) => {
        currentClassNames.push(
          ...classNamesWithModifiers<MediaQueryType, SpacingType>({
            className: propName,
            propValue,
          })
        );

        return currentClassNames;
      }, [])
  );
