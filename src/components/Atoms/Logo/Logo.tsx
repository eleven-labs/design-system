import classNames from 'classnames';
import React, { SVGProps } from 'react';

import { Svgs } from '@/components';
import { marginSystemProps } from '@/constants';
import { pascalCase } from '@/helpers/stringHelper';
import { colorSystemClassName, omitSystemProps, spacingSystemClassName } from '@/helpers/systemPropsHelper';
import { ColorSystemProps, LogoNameType, MarginSystemProps } from '@/types';

export type LogoProps = Omit<SVGProps<SVGSVGElement>, 'color'> &
  MarginSystemProps &
  Pick<ColorSystemProps, 'color'> & {
    name: LogoNameType;
    size?: string | number;
  };

export const Logo: React.FC<LogoProps> = ({ name, size, ...svgProps }) => {
  const Svg = (Svgs as Record<string, React.FC<SVGProps<SVGSVGElement>>>)[`${pascalCase(name)}Logo`];
  return (
    <Svg
      {...omitSystemProps({ props: svgProps, systemPropNames: [...Object.keys(marginSystemProps), 'color'] })}
      className={classNames(spacingSystemClassName(svgProps), colorSystemClassName(svgProps), svgProps?.className)}
      height={svgProps.height || size}
      width={svgProps.width || size}
    />
  );
};
