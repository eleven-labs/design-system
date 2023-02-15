import { cssProperties } from '@/constants/cssProperties';
import {
  AlignContentType,
  AlignItemsType,
  AlignSelfType,
  DisplayType,
  FlexBasisType,
  FlexDirectionType,
  FlexWrapType,
  JustifyContentType,
  TextAlignType,
  TextTransformType,
} from '@/types';

/* Typography */
export const textAlignCssPropertyNameList = Object.keys(cssProperties['text-align']) as ReadonlyArray<TextAlignType>;
export const textTransformCssPropertyNameList = Object.keys(
  cssProperties['text-transform']
) as ReadonlyArray<TextTransformType>;

/* Layout */
export const displayCssPropertyNameList = Object.keys(cssProperties['display']) as ReadonlyArray<DisplayType>;

/* Flex Box */
export const alignContentCssPropertyNameList = Object.keys(
  cssProperties['align-content']
) as ReadonlyArray<AlignContentType>;
export const alignItemsCssPropertyNameList = Object.keys(cssProperties['align-items']) as ReadonlyArray<AlignItemsType>;
export const alignSelfCssPropertyNameList = Object.keys(cssProperties['align-self']) as ReadonlyArray<AlignSelfType>;
export const flexBasisCssPropertyNameList = Object.keys(cssProperties['flex-basis']) as ReadonlyArray<FlexBasisType>;
export const flexDirectionCssPropertyNameList = Object.keys(
  cssProperties['flex-direction']
) as ReadonlyArray<FlexDirectionType>;
export const flexWrapCssPropertyNameList = Object.keys(cssProperties['flex-wrap']) as ReadonlyArray<FlexWrapType>;
export const justifyContentCssPropertyNameList = Object.keys(
  cssProperties['justify-content']
) as ReadonlyArray<JustifyContentType>;
