import { As, AsProps, SpacingSystemProps } from '../../../types';
export declare const buttonVariant: readonly ["primary", "secondary"];
export type ButtonVariantType = (typeof buttonVariant)[number];
export type ButtonOptions = {
    variant?: ButtonVariantType;
    isChoiceChip?: boolean;
};
export type ButtonProps<T extends As = 'button'> = AsProps<T> & SpacingSystemProps & ButtonOptions;
export declare const Button: import('../../../types').ComponentWithAs<"button", ButtonProps<"button">>;
