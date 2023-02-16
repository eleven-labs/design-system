import React, { SVGProps } from 'react';
import { ColorSystemProps, LogoNameType, MarginSystemProps } from '../../../types';
export type LogoProps = Omit<SVGProps<SVGSVGElement>, 'color'> & MarginSystemProps & Pick<ColorSystemProps, 'color'> & {
    name: LogoNameType;
    size?: string | number;
};
export declare const Logo: React.FC<LogoProps>;
