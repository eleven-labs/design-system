import {
  alignContentCssPropertyNameList,
  alignItemsCssPropertyNameList,
  flexOrGridSystemProps,
  justifyContentCssPropertyNameList,
  spacingTokenNameList,
} from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { FlexOrGridSystemProps } from '@/types/SystemProps';

export const flexOrGridSystemPropsControls = createControls<FlexOrGridSystemProps>({
  category: 'Flex Or Grid System Props',
  props: flexOrGridSystemProps,
  options: {
    alignContent: alignContentCssPropertyNameList,
    alignItems: alignItemsCssPropertyNameList,
    gap: spacingTokenNameList,
    gapX: spacingTokenNameList,
    gapY: spacingTokenNameList,
    justifyContent: justifyContentCssPropertyNameList,
  },
});
