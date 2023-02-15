import { displayCssPropertyNameList, heightTokenNameList, layoutSystemProps, widthTokenNameList } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import { LayoutSystemProps } from '@/types/SystemProps';

export const layoutSystemPropsControls = createControls<LayoutSystemProps>({
  category: 'Layout System Props',
  props: layoutSystemProps,
  options: {
    display: displayCssPropertyNameList,
    width: widthTokenNameList,
    height: heightTokenNameList,
    minWidth: widthTokenNameList,
    maxWidth: widthTokenNameList,
    minHeight: heightTokenNameList,
    maxHeight: heightTokenNameList,
  },
});
