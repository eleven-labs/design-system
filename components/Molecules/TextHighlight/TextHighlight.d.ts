import { TextOptions } from '../../../components';
import { As, AsProps, HiddenSystemProps, MarginSystemProps } from '../../../types';
export type TextHighlightOptions = {
    text: string;
    textQuery?: string;
};
export type TextHighlightProps<T extends As = 'p'> = AsProps<T> & MarginSystemProps & HiddenSystemProps & TextOptions & TextHighlightOptions;
export declare const TextHighlight: import('../../../types').ComponentWithAs<"p", TextHighlightProps<"p">>;
