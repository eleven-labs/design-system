import { tokenVariables } from '@/constants';

export type ColorType = keyof typeof tokenVariables['color'];
export type SpacingType = keyof typeof tokenVariables['spacing'];
export type TextSizeType = keyof typeof tokenVariables['text'];
export type HeadingSizeType = keyof typeof tokenVariables['heading'];
export type FontWeightType = keyof typeof tokenVariables['typography']['weight'];
