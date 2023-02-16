import React, { SVGProps } from 'react';
import { ColorSystemProps, IconNameType, MarginSystemProps } from '../../../types';
export type IconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & MarginSystemProps & Pick<ColorSystemProps, 'color'> & {
    name: IconNameType;
    size?: string | number;
};
export declare const Icon: React.FC<IconProps>;
