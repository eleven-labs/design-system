import { colorTokenNameList } from '@/constants';
import { colorSystemProps } from '@/constants/systemProps';
import { createControls } from '@/helpers/storybookHelper';

export const colorSystemPropsControls = createControls({
  category: 'Color',
  props: colorSystemProps,
  options: colorTokenNameList,
});
