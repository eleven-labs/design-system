import { TextProps } from '../../../components';
import { As, IconNameType } from '../../../types';
export type LinkOptions = {
    icon?: IconNameType;
};
export type LinkProps<T extends As = 'a'> = Omit<TextProps<T>, 'color' | 'underline' | 'fontWeight'> & LinkOptions;
export declare const Link: import('../../../types').ComponentWithAs<"a", LinkProps<"a">>;
