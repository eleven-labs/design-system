import type {
  ColorType,
  FontWeightType,
  HeadingSizeType,
  HeightType,
  IconNameType,
  LogoNameType,
  SpacingType,
  TextSizeType,
  WidthType,
} from '@/types';

import { tokenVariables } from './tokenVariables';

export const colorTokenNameList = [
  ...Object.keys(tokenVariables['color']['primary']),
  ...Object.keys(tokenVariables['color']['secondary']),
  ...Object.keys(tokenVariables['color']['greyscale']),
] as ReadonlyArray<ColorType>;

export const spacingTokenNameList = Object.keys(tokenVariables['spacing']) as ReadonlyArray<SpacingType>;

export const widthTokenNameList = Object.keys(tokenVariables['width']) as ReadonlyArray<WidthType>;
export const heightTokenNameList = Object.keys(tokenVariables['height']) as ReadonlyArray<HeightType>;

export const fontWeightTokenNameList = Object.keys(tokenVariables['font-weight']) as ReadonlyArray<FontWeightType>;

export const iconTokenNameList = Object.keys(tokenVariables['asset']['icon']) as ReadonlyArray<IconNameType>;
export const logoTokenNameList = Object.keys(tokenVariables['asset']['logo']) as ReadonlyArray<LogoNameType>;

export const headingSizeTokenNameList = Object.keys(
  tokenVariables['mobile']['typography']['heading'] || tokenVariables['desktop']['typography']['heading']
) as ReadonlyArray<HeadingSizeType>;
export const textSizeTokenNameList = Object.keys(
  tokenVariables['mobile']['typography']['text'] || tokenVariables['desktop']['typography']['text']
) as ReadonlyArray<TextSizeType>;
