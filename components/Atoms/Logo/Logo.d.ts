import * as React from 'react';
import type { FlexProps } from '../../../components';
export declare const logoName: readonly ["website", "blog"];
export type LogoNameType = (typeof logoName)[number];
export interface LogoProps extends FlexProps {
    name: LogoNameType;
    size?: string | number;
}
export declare const Logo: import("react-polymorphed").PolyForwardComponent<"div", LogoProps, React.ElementType<any>>;
