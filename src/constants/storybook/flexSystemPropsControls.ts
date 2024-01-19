import { flexDirectionCssPropertyNameList, flexSystemProps, flexWrapCssPropertyNameList } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { FlexSystemProps } from '@/types/SystemProps';

export const flexSystemPropsControls = createControls<FlexSystemProps>({
  category: 'Flex System Props',
  props: flexSystemProps,
  options: {
    flexDirection: flexDirectionCssPropertyNameList,
    flexWrap: flexWrapCssPropertyNameList,
  },
});
