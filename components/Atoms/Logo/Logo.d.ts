import { AsProps, ColorSystemProps, LogoNameType, MarginSystemProps } from '../../../types';
export type LogoProps = AsProps<'div'> & MarginSystemProps & Pick<ColorSystemProps, 'color'> & {
    name: LogoNameType;
    size?: string | number;
};
export declare const Logo: import('../../../types').ComponentWithAs<"div", LogoProps>;
