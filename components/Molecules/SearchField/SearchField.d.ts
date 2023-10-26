import * as React from 'react';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphed';
import type { BoxProps } from '../../../components';
export interface SearchFieldProps extends BoxProps {
    input: Omit<PolymorphicPropsWithoutRef<'input', {}>, keyof BoxProps>;
    buttonSearch: Omit<PolymorphicPropsWithoutRef<'button', {}>, keyof BoxProps>;
    buttonClose?: Omit<PolymorphicPropsWithoutRef<'button', {}>, keyof BoxProps>;
}
export declare const SearchField: import("react-polymorphed").PolyForwardComponent<"div", SearchFieldProps, React.ElementType<any>>;
