import { flexCssPropertyNameList, flexItemSystemProps, flexWrapCssPropertyNameList } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { FlexItemSystemProps } from '@/types/SystemProps';

export const flexItemSystemPropsControls = createControls<FlexItemSystemProps>({
  category: 'Flex Item System Props',
  props: flexItemSystemProps,
  options: {
    flexBasis: flexWrapCssPropertyNameList,
    flex: flexCssPropertyNameList,
  },
});
