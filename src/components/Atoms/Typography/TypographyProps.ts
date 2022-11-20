import { BoxElementType, BoxProps } from '@/components';
import type { TextSizeType, TypographySystemProps } from '@/types';

export type TypographyProps<C extends BoxElementType, TypographyFontSizeType = TextSizeType> = BoxProps<C> &
  TypographySystemProps<TypographyFontSizeType>;
