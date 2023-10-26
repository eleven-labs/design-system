import { hiddenSystemProps, mediaQueriesList } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { HiddenSystemProps } from '@/types';

export const hiddenSystemPropsControls = createControls<HiddenSystemProps>({
  category: 'Hidden System Props',
  props: hiddenSystemProps,
  options: {
    hiddenAbove: mediaQueriesList,
    hiddenBelow: mediaQueriesList,
  },
});
