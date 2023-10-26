import * as React from 'react';
import type { SpacingSystemProps } from '../../../types';
export declare const buttonVariant: readonly ["primary", "secondary"];
export type ButtonVariantType = (typeof buttonVariant)[number];
export interface ButtonProps extends SpacingSystemProps {
    className?: string;
    variant?: ButtonVariantType;
    isChoiceChip?: boolean;
    children: React.ReactNode;
}
export declare const Button: import("react-polymorphed").PolyForwardComponent<"button", ButtonProps, React.ElementType<any>>;
