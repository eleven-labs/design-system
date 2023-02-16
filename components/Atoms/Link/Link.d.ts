import { TextProps } from '../../../components';
import { As } from '../../../types';
export type LinkProps<T extends As = 'a'> = Omit<TextProps<T>, 'color' | 'underline'>;
export declare const Link: import('../../../types').ComponentWithAs<"a", LinkProps<"a">>;
