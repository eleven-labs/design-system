import {
  displayCssPropertyNameList,
  heightTokenNameList,
  layoutSystemProps,
  mediaQueriesList,
  widthTokenNameList,
} from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { LayoutSystemProps } from '@/types/SystemProps';

export const layoutSystemPropsControls = createControls<LayoutSystemProps>({
  category: 'Layout System Props',
  props: layoutSystemProps,
  options: {
    display: displayCssPropertyNameList,
    width: widthTokenNameList,
    height: heightTokenNameList,
    hiddenAbove: mediaQueriesList,
    hiddenBelow: mediaQueriesList,
  },
});
