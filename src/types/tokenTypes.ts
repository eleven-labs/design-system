import { tokenVariables } from '@/constants';

export type ColorType =
  | keyof typeof tokenVariables['color']['primary']
  | keyof typeof tokenVariables['color']['secondary']
  | keyof typeof tokenVariables['color']['greyscale'];
export type SpacingType = keyof typeof tokenVariables['spacing'];
export type FontWeightType = keyof typeof tokenVariables['font-weight'];
export type HeadingSizeType = keyof (
  | typeof tokenVariables['mobile']['typography']['heading']
  | typeof tokenVariables['desktop']['typography']['heading']
);
export type TextSizeType = keyof (
  | typeof tokenVariables['mobile']['typography']['text']
  | typeof tokenVariables['desktop']['typography']['text']
);
