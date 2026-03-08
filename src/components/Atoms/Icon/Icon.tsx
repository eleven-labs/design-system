import * as React from 'react';

import { Svgs } from '@/components';
import { cn } from '@/helpers';
import { pascalCase } from '@/helpers/stringHelper';
import type { ColorType, IconNameType } from '@/tokens';

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'name' | 'color'> & {
  name: IconNameType;
  color?: ColorType;
  size?: string | number;
  width?: string | number;
  height?: string | number;
};

export const Icon: React.FC<IconProps> = ({ name, size, width, height, color, className, style, ...svgProps }) => {
  const Svg = (Svgs as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[pascalCase(name)];
  return (
    <Svg
      {...svgProps}
      className={cn(
        'icon',
        color &&
          `
            text-${color}
          `,
        className
      )}
      height={height ?? '1em'}
      width={width ?? '1em'}
      style={{ fontSize: size, ...style }}
    />
  );
};
