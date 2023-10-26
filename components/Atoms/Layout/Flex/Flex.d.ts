import * as React from 'react';
import type { BoxProps } from '../../../../components';
import type { DisplayType, FlexBoxSystemProps, TypeWithMediaQueriesType } from '../../../../types';
export interface FlexProps extends Omit<BoxProps, 'display'>, FlexBoxSystemProps {
    display?: TypeWithMediaQueriesType<Extract<DisplayType, 'flex' | 'inline-flex'>>;
}
export declare const Flex: import("react-polymorphed").PolyForwardComponent<"div", FlexProps, React.ElementType<any>>;
