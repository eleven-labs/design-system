import { As, AsProps, ColorSystemProps, HeadingSizeType, SpacingSystemProps, TypographySystemProps } from '../../../../types';
export interface HeadingOptions {
    size?: HeadingSizeType;
}
export type HeadingProps<T extends As = 'h1'> = AsProps<T> & HeadingOptions & Omit<TypographySystemProps, 'textSize' | 'fontWeight'> & Pick<ColorSystemProps, 'color'> & SpacingSystemProps;
export declare const Heading: import('../../../../types').ComponentWithAs<"h1", HeadingProps<"h1">>;
