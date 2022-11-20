import { fontWeightTokenNameList, textSizeTokenNameList, typographySystemProps } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { HeadingSizeType, TextSizeType } from '@/types';

import { textAlignList, textDecorationList, textTransformList } from '../cssProperties';

export const typographyPropsControls = (
  sizeTokenNameList: ReadonlyArray<HeadingSizeType | TextSizeType> = textSizeTokenNameList
): ReturnType<typeof createControls> =>
  createControls({
    category: 'Typography',
    props: typographySystemProps,
    options: {
      size: sizeTokenNameList,
      textAlign: textAlignList,
      weight: fontWeightTokenNameList,
      textDecoration: textDecorationList,
      textTransform: textTransformList,
    },
    controlType: {
      italic: 'boolean',
    },
  });
