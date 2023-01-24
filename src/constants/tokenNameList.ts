import type { ColorType, FontWeightType, HeadingSizeType, SpacingType, TextSizeType } from '@/types';

import { tokenVariables } from './tokenVariables';

export const colorTokenNameList = [
  ...Object.keys(tokenVariables['color']['primary']),
  ...Object.keys(tokenVariables['color']['secondary']),
  ...Object.keys(tokenVariables['color']['greyscale']),
] as ReadonlyArray<ColorType>;
export const spacingTokenNameList = Object.keys(tokenVariables['spacing']) as ReadonlyArray<SpacingType>;
export const fontWeightTokenNameList = Object.keys(tokenVariables['font-weight']) as ReadonlyArray<FontWeightType>;
export const headingSizeTokenNameList = Object.keys(
  tokenVariables['mobile']['typography']['heading'] || tokenVariables['desktop']['typography']['heading']
) as ReadonlyArray<HeadingSizeType>;
export const textSizeTokenNameList = Object.keys(
  tokenVariables['mobile']['typography']['text'] || tokenVariables['desktop']['typography']['text']
) as ReadonlyArray<TextSizeType>;
