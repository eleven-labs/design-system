import { alignContentList, alignItemsList, justifyContentList, spacingTokenNameList } from '@/constants';
import { flexOrGridBoxSystemProps } from '@/constants/systemProps';
import { createControls } from '@/helpers/storybookHelper';

export const flexOrGridPropsControls = createControls({
  category: 'Flex or Grid Box',
  props: flexOrGridBoxSystemProps,
  options: {
    alignItems: alignItemsList,
    alignContent: alignContentList,
    justifyContent: justifyContentList,
    gap: spacingTokenNameList,
    gapX: spacingTokenNameList,
    gapY: spacingTokenNameList,
  },
});
