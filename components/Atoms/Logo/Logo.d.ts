import { AsProps, ColorSystemProps, MarginSystemProps } from '../../../types';
export declare const logoName: readonly ["website", "blog"];
export type LogoNameType = (typeof logoName)[number];
export type LogoProps = AsProps<'div'> & MarginSystemProps & Pick<ColorSystemProps, 'color'> & {
    name: LogoNameType;
    size?: string | number;
};
export declare const Logo: import('../../../types').ComponentWithAs<"div", LogoProps>;
