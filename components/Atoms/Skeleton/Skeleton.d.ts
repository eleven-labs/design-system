import React from 'react';
import type { BoxProps } from '../../../components';
export interface SkeletonProps extends BoxProps {
    isLoading?: boolean;
}
export declare const Skeleton: import("react-polymorphed").PolyForwardComponent<"div", SkeletonProps, React.ElementType<any>>;
