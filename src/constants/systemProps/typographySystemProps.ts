import type { HeadingSizeType, TextSizeType, TypographySystemProps } from '@/types';

export const typographySystemProps: Record<keyof TypographySystemProps<HeadingSizeType | TextSizeType>, string[]> = {
  size: ['font-size'],
  textAlign: ['text-align'],
  weight: ['font-weight'],
  italic: ['font-style'],
  textDecoration: ['text-decoration'],
  textTransform: ['text-transform'],
};
