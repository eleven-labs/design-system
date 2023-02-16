import { BoxProps } from '../../../../components';
import { As, DisplayType, TypeWithMediaQueriesType } from '../../../../types';
export type FlexProps<T extends As = 'div'> = Omit<BoxProps<T>, 'display'> & {
    display?: TypeWithMediaQueriesType<Extract<DisplayType, 'flex' | 'inline-flex'>>;
};
export declare const Flex: import('../../../../types').ComponentWithAs<"div", FlexProps<"div">>;
