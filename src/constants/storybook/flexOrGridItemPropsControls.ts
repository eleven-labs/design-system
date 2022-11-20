import { alignSelfList } from '@/constants';
import { flexOrGridItemSystemProps } from '@/constants/systemProps';
import { createControls } from '@/helpers/storybookHelper';

export const flexOrGridItemPropsControls = createControls({
  category: 'Flex or Grid Item',
  props: flexOrGridItemSystemProps,
  options: {
    align: alignSelfList,
  },
});
