import * as React from 'react';
import type { IconNameType } from '../../../types';
export interface LinkProps {
    className?: string;
    icon?: IconNameType;
    children: React.ReactNode;
}
export declare const Link: import("react-polymorphed").PolyForwardComponent<"a", LinkProps, React.ElementType<any>>;
