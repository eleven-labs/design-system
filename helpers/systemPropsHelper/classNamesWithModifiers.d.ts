import { TypeWithModifierType } from '../../types';
export declare const classNamesWithModifiers: <TModifierType extends string, TPropValue extends string | number | boolean>(options: {
    className: string;
    defaultModifier?: string | undefined;
    propValue?: TPropValue | Partial<Record<TModifierType, TPropValue>> | undefined;
}) => string[];
