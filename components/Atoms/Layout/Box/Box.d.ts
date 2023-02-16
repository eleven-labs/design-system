import { As, AsProps, SystemProps } from '../../../../types';
export type BoxProps<T extends As = 'div'> = AsProps<T> & SystemProps;
export declare const Box: import('../../../../types').ComponentWithAs<"div", BoxProps<"div">>;
