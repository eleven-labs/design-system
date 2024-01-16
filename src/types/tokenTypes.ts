import type { tokenVariables } from '@/constants';

export type ColorType = keyof (typeof tokenVariables)['color'];

export type SpacingType = keyof (typeof tokenVariables)['spacing'];

export type WidthType = keyof (typeof tokenVariables)['width'];
export type HeightType = keyof (typeof tokenVariables)['height'];

export type FontWeightType = keyof (typeof tokenVariables)['font-weight'];

export type IconNameType = keyof (typeof tokenVariables)['asset']['icon'];

export type HeadingSizeType = keyof (
  | (typeof tokenVariables)['mobile']['typography']['heading']
  | (typeof tokenVariables)['desktop']['typography']['heading']
);
export type TextSizeType = keyof (
  | (typeof tokenVariables)['mobile']['typography']['text']
  | (typeof tokenVariables)['desktop']['typography']['text']
);
