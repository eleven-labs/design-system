import * as React from 'react';
import type { BoxProps } from '../../../../components';
import type { TextSizeType, TypographySystemProps } from '../../../../types';
export interface TextProps extends BoxProps, TypographySystemProps {
    size?: TextSizeType;
}
export declare const Text: import("react-polymorphed").PolyForwardComponent<"p", TextProps, React.ElementType<any>>;
