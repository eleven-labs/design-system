import * as React from 'react';
import type { TextProps } from '../../../components';
export interface TextHighlightProps extends TextProps {
    text: string;
    textQuery?: string;
}
export declare const TextHighlight: import("react-polymorphed").PolyForwardComponent<"p", TextHighlightProps, React.ElementType<any>>;
