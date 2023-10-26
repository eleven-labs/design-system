import * as React from 'react';
import type { BoxProps } from '../../../../components';
import type { HeadingSizeType, TypographySystemProps } from '../../../../types';
export interface HeadingProps extends BoxProps, TypographySystemProps {
    size?: HeadingSizeType;
}
export declare const Heading: import("react-polymorphed").PolyForwardComponent<"h1", HeadingProps, React.ElementType<any>>;
