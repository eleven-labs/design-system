import { textAlignCssPropertyNameList, typographySystemProps } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { TypographySystemProps } from '@/types';

export const typographySystemPropsControls = createControls<TypographySystemProps>({
  category: 'Typography System Props',
  props: typographySystemProps,
  options: {
    textAlign: textAlignCssPropertyNameList,
  },
  controlType: {
    italic: 'boolean',
    underline: 'boolean',
  },
});
