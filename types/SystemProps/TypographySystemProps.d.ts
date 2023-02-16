import type { FontWeightType, TextAlignType, TextSizeType, TextTransformType, TypeWithMediaQueriesType } from '../../types';
export interface TypographySystemProps {
    /**
     * text-align (including breakpoints modifiers)
     */
    textAlign?: TypeWithMediaQueriesType<TextAlignType>;
    /**
     * font-weight
     */
    fontWeight?: FontWeightType;
    /**
     * font-style italic
     */
    italic?: boolean;
    /**
     * text-decoration underline
     */
    underline?: boolean;
    /**
     * text-transform
     */
    textTransform?: TextTransformType;
    /**
     * text-size
     */
    textSize?: TextSizeType;
}
