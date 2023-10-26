import * as React from 'react';
import type { ColorSystemProps, IconNameType, MarginSystemProps } from '../../../types';
export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'name' | 'color'> & MarginSystemProps & Pick<ColorSystemProps, 'color'> & {
    name: IconNameType;
    size?: string | number;
};
export declare const Icon: React.FC<IconProps>;
