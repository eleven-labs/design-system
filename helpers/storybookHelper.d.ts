import { ControlType } from '@storybook/blocks';
import { ArgTypes } from '@storybook/csf';
export declare const getLinkMdnByCssProperty: (cssProperty: string) => string;
export declare const createDescription: (options: {
    cssProperties: string[];
    cssValues?: string[];
}) => string;
export declare const createControls: <T>(parameters: {
    category: string;
    props: Record<keyof T, readonly string[]>;
    subCategory?: string | undefined;
    controlType?: Partial<Record<keyof T, ControlType>> | undefined;
    options?: readonly string[] | Partial<Record<keyof T, readonly string[]>> | undefined;
}) => Partial<ArgTypes<T>>;
export declare const getValueOfCssPropertyInDesignTokens: (options: {
    path: string;
    tokenName: string;
    device: 'mobile' | 'desktop';
    propertyCSS: string;
}) => number | string;
