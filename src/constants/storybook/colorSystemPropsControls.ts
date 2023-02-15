import { colorTokenNameList } from '@/constants';
import { colorSystemProps } from '@/constants/systemProps';
import { createControls } from '@/helpers/storybookHelper';
import { ColorSystemProps } from '@/types';

export const colorSystemPropsControls = createControls<ColorSystemProps>({
  category: 'Color System Props',
  props: colorSystemProps,
  options: {
    bg: colorTokenNameList,
    color: colorTokenNameList,
  },
});
