import { As, AsProps, ColorSystemProps, HiddenSystemProps, SpacingSystemProps, TextSizeType, TypographySystemProps } from '../../../../types';
export interface TextOptions {
    size?: TextSizeType;
}
export type TextProps<T extends As = 'p'> = AsProps<T> & TextOptions & Omit<TypographySystemProps, 'textSize'> & Pick<ColorSystemProps, 'color'> & SpacingSystemProps & HiddenSystemProps;
export declare const Text: import('../../../../types').ComponentWithAs<"p", TextProps<"p">>;
