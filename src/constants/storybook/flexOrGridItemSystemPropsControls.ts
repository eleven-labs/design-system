import { alignSelfCssPropertyNameList, flexOrGridItemSystemProps } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { FlexOrGridItemSystemProps } from '@/types/SystemProps';

export const flexOrGridItemSystemPropsControls = createControls<FlexOrGridItemSystemProps>({
  category: 'Flex Or Grid Item System Props',
  props: flexOrGridItemSystemProps,
  options: {
    alignSelf: alignSelfCssPropertyNameList,
  },
});
