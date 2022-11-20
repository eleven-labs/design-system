import type { ColorType, FontWeightType, HeadingSizeType, SpacingType, TextSizeType } from '@/types';

import { tokenVariables } from './tokenVariables';

export const colorTokenNameList = Object.keys(tokenVariables['color']) as ReadonlyArray<ColorType>;
export const spacingTokenNameList = Object.keys(tokenVariables['spacing']) as ReadonlyArray<SpacingType>;
export const headingSizeTokenNameList = Object.keys(tokenVariables['heading']) as ReadonlyArray<HeadingSizeType>;
export const textSizeTokenNameList = Object.keys(tokenVariables['text']) as ReadonlyArray<TextSizeType>;
export const fontWeightTokenNameList = Object.keys(
  tokenVariables['typography']['weight']
) as ReadonlyArray<FontWeightType>;
