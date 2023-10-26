import * as React from 'react';
import type { SystemProps } from '../../../../types';
export interface BoxProps extends SystemProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const Box: import("react-polymorphed").PolyForwardComponent<"div", BoxProps, React.ElementType<any>>;
