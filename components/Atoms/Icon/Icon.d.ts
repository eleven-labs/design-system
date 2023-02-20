import * as React from 'react';
import { ColorSystemProps, IconNameType, MarginSystemProps } from '../../../types';
export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & MarginSystemProps & Pick<ColorSystemProps, 'color'> & {
    name: IconNameType;
    size?: string | number;
};
export declare const Icon: React.FC<IconProps>;
