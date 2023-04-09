import { BoxProps } from '../../../components';
export interface SkeletonOptions {
    isLoading?: boolean;
}
export type SkeletonProps = BoxProps<'div'> & SkeletonOptions;
export declare const Skeleton: import("../../../types").ComponentWithAs<"div", SkeletonProps>;
