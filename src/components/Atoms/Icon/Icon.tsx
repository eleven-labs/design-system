import classNames from 'classnames';
import * as React from 'react';

import { Svgs } from '@/components';
import { marginSystemProps } from '@/constants';
import { pascalCase } from '@/helpers/stringHelper';
import { colorSystemClassName, omitSystemProps, spacingSystemClassName } from '@/helpers/systemPropsHelper';
import type { ColorSystemProps, IconNameType, MarginSystemProps } from '@/types';

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'name' | 'color'> &
  MarginSystemProps &
  Pick<ColorSystemProps, 'color'> & {
    name: IconNameType;
    size?: string | number;
  };

export const Icon: React.FC<IconProps> = ({ name, size, ...svgProps }) => {
  const Svg = (Svgs as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[pascalCase(name)];
  return (
    <Svg
      {...omitSystemProps({ props: svgProps, systemPropNames: [...Object.keys(marginSystemProps), 'color'] })}
      className={classNames(
        'icon',
        spacingSystemClassName(svgProps),
        colorSystemClassName(svgProps),
        svgProps?.className
      )}
      height="1em"
      width="1em"
      style={{ fontSize: size }}
    />
  );
};
